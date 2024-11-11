import { createReducer, on } from '@ngrx/store';
import { AuthState } from '../auth.state';
import { login, logout } from '../actions/auth.actions';

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(login, (state, { user }) => ({
    ...state,
    isAuthenticated: true,
    user,
  })),
  on(logout, (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }))
);
