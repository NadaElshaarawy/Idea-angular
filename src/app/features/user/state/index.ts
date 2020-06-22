import * as Store from '@app/store'
import { User } from '@app/models/user';

export interface UserState{
    users:User[];
    loading:boolean;
    loaded: boolean;
}

export interface AppState extends Store.AppState{
    users:UserState
}