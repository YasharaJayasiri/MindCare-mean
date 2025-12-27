import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Signup } from './pages/signup/signup';
import { Login } from './pages/login/login';
import { Checkup } from './pages/checkup/checkup';
import { Resources } from './pages/resources/resources';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'signup', component: Signup },
  { path: 'login', component: Login },
  { path: 'checkup', component: Checkup },
  { path: 'resources', component: Resources },
  { path: 'dashboard', component: Dashboard }

];
