import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { tap, mergeMap, catchError, map, withLatestFrom } from 'rxjs/operators';

import { ApiService } from '@app/services/api.service';
//import * as fromError from '@app/store/actions/error.action';
//import * as fromIdea from './idea.action';
import { AppState } from '.';
import { Router } from '@angular/router';
import { LoadIdeas, IdeaActions, LoadIdeasSuccess, LoadIdeaSuccess, LoadIdea, CreateIdea, CreateIdeaSuccess, UpdateIdea, UpdateIdeaSuccess, DeleteIdea, DeleteIdeaSuccess, LikeIdea, DislikeIdea, CommentIdea, CommentIdeaSuccess } from './idea.action';
import { AddError, RemoveError } from '@app/store/actions/error.action';

@Injectable()
export class IdeaEffects {
  constructor(
    private store: Store<AppState>,
    private action$: Actions,
    private api: ApiService,
    private router: Router
  ) {}

  @Effect()
  loadIdeas$: Observable<Action> = this.action$.pipe(
    ofType<LoadIdeas>(IdeaActions.LOAD_IDEAS),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap(action =>
      this.api.getIdeas().pipe(
        map(ideas => new LoadIdeasSuccess(ideas)),
        catchError(err => of(new AddError(err.error)))
      )
    )
  );

  @Effect()
  loadIdea$: Observable<Action> = this.action$.pipe(
    ofType<LoadIdea>(IdeaActions.LOAD_IDEA),
    tap(() => this.store.dispatch(new RemoveError())),
    withLatestFrom(this.store),
    mergeMap(([action, state]: [LoadIdea, AppState]) => {
      const idea = state.ideas.ideas[action.payload];
      if (idea) {
        return of(new LoadIdeaSuccess());
      } else {
        return this.api.getIdea(action.payload).pipe(
          mergeMap(res => of(new LoadIdeaSuccess(res))),
          catchError(err => of(new AddError(err.error)))
        );
      }
    })
  );

  @Effect()
  createIdeas$: Observable<Action> = this.action$.pipe(
    ofType<CreateIdea>(IdeaActions.CREATE_IDEA),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap(action =>
      this.api.createIdea(action.payload).pipe(
        map(idea => new CreateIdeaSuccess(idea)),
        catchError(err => of(new AddError(err.error)))
      )
    )
  );

  @Effect({dispatch:false})
  createComment$: Observable<Action> = this.action$.pipe(
    ofType<CommentIdea>(IdeaActions.COMMENT_IDEA),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap(action =>
      this.api.createComment(action.id ,action.payload).pipe(
        map((comment) => new CommentIdeaSuccess(comment)),
        catchError(err => of(new AddError(err.error)))
      )
    )
  );

  @Effect()
  updateIdeas$: Observable<Action> = this.action$.pipe(
    ofType<UpdateIdea>(IdeaActions.UPDATE_IDEA),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap(action =>
      this.api.updateIdea(action.payload.id, action.payload).pipe(
        map(idea => new UpdateIdeaSuccess(idea)),
        catchError(err => of(new AddError(err.error)))
      )
    )
  );

  @Effect()
  deleteIdeas$: Observable<Action> = this.action$.pipe(
    ofType<DeleteIdea>(IdeaActions.DELETE_IDEA),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap(action =>
      this.api.deleteIdea(action.payload).pipe(
        map(idea => new DeleteIdeaSuccess(idea.id)),
        catchError(err => of(new AddError(err.error)))
      )
    )
  );

  @Effect()
  likeIdeas$: Observable<Action> = this.action$.pipe(
    ofType<LikeIdea>(IdeaActions.LIKE_IDEA),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap(action =>
      this.api.upvoteIdea(action.payload).pipe(
        map(idea => new UpdateIdeaSuccess(idea)),
        catchError(err => of(new AddError(err.error)))
      )
    )
  );

  @Effect()
  dislikeIdeas$: Observable<Action> = this.action$.pipe(
    ofType<DislikeIdea>(IdeaActions.DISLIKE_IDEA),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap(action =>
      this.api.downvoteIdea(action.payload).pipe(
        map(idea => new UpdateIdeaSuccess(idea)),
        catchError(err => of(new AddError(err.error)))
      )
    )
  );

  // @Effect({ dispatch: false })
  // createIdeaRedirect$ = this.action$.pipe(
  //   ofType<CreateIdeaSuccess>(
  //     IdeaActions.CREATE_IDEA_SUCCESS
  //   ),
  //   tap(action => this.router.navigate(['/ideas', action.payload.id]))
  // );
}