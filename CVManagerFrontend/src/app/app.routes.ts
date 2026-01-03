import { Routes } from '@angular/router';
import {Home} from './features/home/home';
import {canActivateAuthRole} from './core/auth/guards/auth-guard';
import {Forbidden} from './features/forbidden/forbidden';
export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'forbidden',
    component: Forbidden
  },
  {
    path: 'user',
    loadChildren: () => import('./features/user/user.routes').then(m => m.routes),
    canActivate: [canActivateAuthRole]
  }
];
