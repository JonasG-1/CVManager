import {Routes} from '@angular/router';
import {Projects} from './projects/projects';

export const routes: Routes = [
  {
    path: '', // Entspricht /user/
    children: [
      {
        path: 'projects', // Entspricht /user/projects
        component: Projects
      },
      {
        path: '',
        redirectTo: 'projects',
        pathMatch: 'full'
      }
    ]
  }
];
