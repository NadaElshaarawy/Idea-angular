import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { Idea } from '@app/models/idea';
import { User } from '@app/models/user';
import {
  AppState,
} from '../state';
import { LoadIdeas, LikeIdea, DislikeIdea, DeleteIdea } from '../state/idea.action';
//import { Entity } from '@app/models/entity';
import { selectAllIdeas, selectIdeaLoader } from '../state/idea.selector';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit, OnDestroy {
  ideas: Observable<Idea[]>;
  loader: Observable<boolean>;
  auth$: Subscription;
  currentUser: User;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadIdeas());
    this.ideas = this.store.select(selectAllIdeas);
    this.loader = this.store.select(selectIdeaLoader);
    this.auth$ = this.store
      .select(state => state.auth.user)
      .subscribe(val => (this.currentUser = val));
  }
  

  ngOnDestroy() {
    this.auth$.unsubscribe();
  }

  like(id: string) {
    this.store.dispatch(new LikeIdea(id));
  }
  dislike(id: string) {
    this.store.dispatch(new DislikeIdea(id));
  }

  deleteIdea(event){
    const deleted = confirm("Sure?");
    if(deleted){
       this.store.dispatch( new DeleteIdea(event));
       
    }
  
  }

}
