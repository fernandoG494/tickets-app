import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideStore } from '@ngrx/store';
import { reducers } from './redux/app.state';

export const routes: Routes = [
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  { path: '**', redirectTo: 'auth/login' },
];

export const providers = [
  provideRouter(routes),
  provideStore(reducers),
  provideStoreDevtools({
    maxAge: 25,
    logOnly: true,
  }),
];
