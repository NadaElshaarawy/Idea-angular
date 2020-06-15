// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import {StoreModule, ActionReducerMap} from '@ngrx/store';
// import {StoreDevtoolsModule} from '@ngrx/store-devtools';
// import {EffectsModule} from '@ngrx/effects'
// import { errorReducer, ErrorState } from './reducers/error.reducer';
// import { AuthState, authReducer } from './reducers/auth.reducer';
// import { AuthEffects } from './effects/auth.effects';
// import {
//   RouterReducerState,
//    routerReducer,
//   StoreRouterConnectingModule,
//   RouterStateSerializer
// } from '@ngrx/router-store';
// import { RouterStateUrl, CustomSerializer } from './reducers/router.reducer';

// export interface AppState{
//   error: ErrorState;
//   auth : AuthState;
//   router:RouterReducerState<RouterStateUrl>;
// }


// export const reducers : ActionReducerMap<AppState> = {
//   error: errorReducer,
//   auth : authReducer,
//   router: routerReducer
// }

// export const effects = [
//   AuthEffects
// ]


// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule,
//     EffectsModule.forRoot(effects),
//     StoreModule.forRoot(reducers),
//     StoreDevtoolsModule.instrument(),
//     StoreRouterConnectingModule
//   ],
//   providers:[
//     {
//       provide: RouterStateSerializer,
//       useClass: CustomSerializer
//     }
//   ]
// })
// export class AppStoreModule { }

import { NgModule } from '@angular/core';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';


import { ErrorState, errorReducer } from './reducers/error.reducer';
import { AuthState, authReducer } from './reducers/auth.reducer';
import { AuthEffects } from './effects/auth.effects';
import { UserState } from '@app/features/user/state';
import { userReducer } from '@app/features/user/state/user.reducer';

export interface AppState{
  error: ErrorState;
  auth : AuthState;
  users: UserState
}


export const reducers : ActionReducerMap<AppState> = {
  error: errorReducer,
  auth : authReducer,
  users: userReducer
  
}

export const effects = [
  AuthEffects
]
@NgModule({
  imports: [
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    
  ],
  providers: [
    
  ]
})
export class AppStoreModule {}