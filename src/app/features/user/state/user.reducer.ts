import { UserState } from '.';

import { UserActions, UserAction } from './user.action';


const initialState: UserState = {
    users: [],
    loaded: false,
    loading : false,
    
}

export const userReducer:(state:UserState, action:UserAction) => UserState = (state, action) =>
{
    switch(action.type)
    {
        case UserActions.LOAD_USERS:
            return {...state, loaded:false, loading:true};

        case UserActions.LOAD_USERS_SUCCESS:
            const users = action.payload;
            return {...state,users, loaded:true, loading:false};

        default:
            return state;
            
    }
}