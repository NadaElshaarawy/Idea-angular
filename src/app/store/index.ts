import { ActionReducerMap } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import { AuthEffects } from '@app/store/effects/auth.effects';

import { authReducer, AuthState } from '@app/store/reducers/auth.reducer';
import { errorReducer, ErrorState } from '@app/store/reducers/error.reducer';
import { RouterStateUrl } from '@app/store/reducers/router.reducer';
import { UserState } from '@app/features/user/state';
import { IdeaState } from '@app/features/idea/state';
import { userReducer } from '@app/features/user/state/user.reducer';
import { ideaReducer } from '@app/features/idea/state/idea.reducer';

export const effects = [AuthEffects];

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  error: errorReducer,
  users:userReducer,
  ideas: ideaReducer,
  router: fromRouter.routerReducer
};

export interface AppState {
  auth: AuthState;
  error: ErrorState;
  users: UserState;
  ideas: IdeaState
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}