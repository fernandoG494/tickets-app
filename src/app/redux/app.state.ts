import { ActionReducerMap } from '@ngrx/store';
import { AuthState } from './states/auth.state';
import { authReducer } from './states/reducers/auth.reducers';

export interface AppState {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
};
