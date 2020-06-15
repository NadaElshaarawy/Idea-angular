import { Actions, ErrorActionTypes } from '@app/store/actions/error.action';
export interface ErrorState{
    error: any;
}

const initialState : ErrorState = {
    error: null
}

export const errorReducer : (state: ErrorState, action: Actions) => ErrorState =
    (
     state = initialState,
     action:Actions
     )  =>  {
     switch(action.type){
        case ErrorActionTypes.ADD_ERROR:
            return {...state, error:action.payload}
        case ErrorActionTypes.REMOVE_ERROR:
            return {...state, error: null}
        default: return state;
     }
 };