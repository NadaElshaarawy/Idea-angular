
// import { NgModule } from '@angular/core';
// import { StoreModule, ActionReducerMap } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { EffectsModule } from '@ngrx/effects';


// import { ErrorState, errorReducer } from './reducers/error.reducer';
// import { AuthState, authReducer } from './reducers/auth.reducer';
// import { AuthEffects } from './effects/auth.effects';
// import { UserState } from '@app/features/user/state';
// import { userReducer } from '@app/features/user/state/user.reducer';

// export interface AppState{
//   error: ErrorState;
//   auth : AuthState;
//   users: UserState
// }


// export const reducers : ActionReducerMap<AppState> = {
//   error: errorReducer,
//   auth : authReducer,
//   users: userReducer
  
// }

// export const effects = [
//   AuthEffects
// ]
// @NgModule({
//   imports: [
//     EffectsModule.forRoot(effects),
//     StoreModule.forRoot(reducers),
//     StoreDevtoolsModule.instrument(),
    
//   ],
//   providers: [
    
//   ]
// })
// export class AppStoreModule {}

// import { NgModule } from '@angular/core';
// import { StoreModule, ActionReducerMap } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { EffectsModule } from '@ngrx/effects';
// import {
//   StoreRouterConnectingModule,
//   RouterStateSerializer
// } from '@ngrx/router-store';

// import { authReducer, AuthState } from '@app/store/reducers/auth.reducer';
// import { errorReducer, ErrorState } from '@app/store/reducers/error.reducer';

// import { CustomSerializer } from '@app/store/reducers/router.reducer';
// import { userReducer } from '@app/features/user/state/user.reducer';
// import { UserState } from '@app/features/user/state';
// import { IdeaState } from '@app/features/idea/state';
// import { ideaReducer } from '@app/features/idea/state/idea.reducer';
// import { AuthEffects } from './effects/auth.effects';
// import { UserEffects } from '@app/features/user/state/user.effects';
// import { IdeaEffects } from '@app/features/idea/state/idea.effect';

// export interface AppState{
//   error: ErrorState;
//   auth : AuthState;
//   users: UserState
//   ideas: IdeaState
// } 
// export const effects = [
//   AuthEffects,
//   UserEffects,
//   IdeaEffects
// ]
// export const reducers : ActionReducerMap<AppState> = {
//   error: errorReducer,
//   auth : authReducer,
//   users: userReducer,
//   ideas: ideaReducer,
  
  
// }
// @NgModule({
//   imports: [
//     EffectsModule.forRoot(effects),
//     StoreModule.forRoot(reducers),
//     StoreDevtoolsModule.instrument(),
//     StoreRouterConnectingModule
//   ],
//   providers: [
//     {
//       provide: RouterStateSerializer,
//       useClass: CustomSerializer
//     }
//   ]
// })
// export class AppStoreModule {}
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';

import { effects, reducers } from '@app/store';
import { CustomSerializer } from '@app/store/reducers/router.reducer';

@NgModule({
  imports: [
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    }
  ]
})
export class AppStoreModule {}