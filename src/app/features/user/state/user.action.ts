import {Action} from '@ngrx/store';
import {User} from '@app/models/user';


export enum UserActions {
    LOAD_USERS = '[Users] load user',
    LOAD_USERS_SUCCESS = '[Users] load users success'
}

export class LoadUsers implements Action{
   readonly type = UserActions.LOAD_USERS; 
}

export class LoadUsersSuccess implements Action{
    readonly type = UserActions.LOAD_USERS_SUCCESS; 
    constructor (public payload:User[]){}
 }

 export type UserAction = LoadUsers | LoadUsersSuccess;
