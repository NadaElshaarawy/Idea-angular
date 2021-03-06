import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from '@app/services/auth.service';
import { Observable, from, of } from 'rxjs';
import { SetCurrentUser, SetInitialUser, AuthActionTypes, LoginUser, RegisterUser} from '@app/store/actions/auth.action' ;
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { User } from '@app/models/user';
import {Action, Store} from '@ngrx/store';
import { AddError, RemoveError } from '../actions/error.action';
import { AppState } from '@app/store';


@Injectable()
export class AuthEffects{
    constructor(
        private action$ : Actions,
        private authService:AuthService,
        private store: Store<AppState>){}
        
    @Effect()
    setInitialUser$:Observable<Action> = this.action$.pipe(
        ofType<SetInitialUser>(AuthActionTypes.SET_INITIAL_USER),
        tap(() => this.store.dispatch(new RemoveError())),
        mergeMap((action: SetInitialUser) => this.authService.whoami().pipe(
        map((user: User) => new SetCurrentUser(user)),
        catchError(err =>  of(new AddError(err)))
    ))
    );
            

    @Effect()
    loginUser$:Observable<Action> = this.action$.pipe(
        ofType<LoginUser>(AuthActionTypes.LOGIN_USER),
        tap(() => this.store.dispatch(new RemoveError())),
        mergeMap((action: LoginUser) => this.authService.login(action.payload).pipe(
        map((user: User) => new SetCurrentUser(user)),
        catchError(err =>  of(new AddError(err)))
    ))
    );

    @Effect()
    registerUser$:Observable<Action> = this.action$.pipe(
        ofType<RegisterUser>(AuthActionTypes.REGISTER_USER),
        tap(() => this.store.dispatch(new RemoveError())),
        mergeMap((action: RegisterUser) => this.authService.register(action.payload).pipe(
        map((user: User) => new SetCurrentUser(user)),
        catchError(err => of(new AddError(err)))
    ))
    );

}