import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { AuthService } from '@app/services/auth.service';
import { User } from '@app/models/user';
import { Idea, IdeaDTO } from '@app/models/idea';
import { CommentDTO } from '@app/models/comment';

@Injectable()
export class ApiService {
  private api: string = environment.api_server + '/api';

  constructor(private http: HttpClient, private auth: AuthService) {}

  private request(
    method: string,
    endpoint: string,
    body?: any
  ): Observable<any> {
    const url = `${this.api}/${endpoint}`;
    return this.http.request(method, url, {
      body,
      headers: { authorization: `Bearer ${this.auth.token}` }
    });
  }

  getUsers(): Observable<User[]> {
    const endpoint = 'users';
    const users = this.request('GET', endpoint);
    return users;
  }

  getUser(username: string): Observable<User> {
    return this.request('GET', `users/${username}`);
  }

  getIdeas(): Observable<Idea[]> {
  
    const endpoint =  'twitter';
    return this.request('GET', endpoint);
  }

  getIdea(id: string): Observable<Idea> {
    return this.request('GET', `twitter/${id}`);
  }

  createIdea(data: IdeaDTO): Observable<Idea> {
    return this.request('POST', `twitter/`, data);
  }

  updateIdea(id: string, data: Partial<IdeaDTO>): Observable<Idea> {
    return this.request('PUT', `twitter/${id}`, data);
  }

  deleteIdea(id: string): Observable<Idea> {
    return this.request('DELETE', `twitter/${id}`);
  }

  upvoteIdea(id: string): Observable<Idea> {
    return this.request('POST', `twitter/${id}/like`);
  }

  downvoteIdea(id: string): Observable<Idea> {
    return this.request('POST', `twitter/${id}/dislike`);
  }

  bookmarkIdea(id: string): Observable<User> {
    return this.request('POST', `twitter/${id}/bookmark`);
  }

  unbookmarkIdea(id: string): Observable<User> {
    return this.request('DELETE', `twitter/${id}/bookmark`);
  }

  getCommentsByIdea(idea: string): Observable<Comment[]> {
    const endpoint = `comment/tweet/${idea}`;
    return this.request('GET', endpoint);
  }

  getCommentsByUser(user: string): Observable<Comment[]> {
    const endpoint =  `comment/user/${user}`;
    return this.request('GET', endpoint);
  }

  getComment(id: string): Observable<Comment> {
    return this.request('GET', `comment/${id}`);
  }

  createComment(idea: string,data): Observable<CommentDTO> {

    return this.request('POST', `comment/tweet/${idea}`, data);
  }

  deleteComment(id: string): Observable<Comment> {
    return this.request('DELETE', `comment/${id}`);
  }
}


