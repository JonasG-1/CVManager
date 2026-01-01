import { Routes } from '@angular/router';
import {Home} from './features/home/home';
import {canActivateAuthRole} from './core/guards/auth-guard';
export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'user',
    loadChildren: () => import('./features/user/user.routes').then(m => m.routes),
    canActivate: [canActivateAuthRole]
  }
];
