import { Routes } from '@angular/router';
import { MissingPageComponent } from './missing-page/missing-page.component';

export const routes: Routes = [
  {
    path: 'anm-latest',
    redirectTo: 'blog/anm/update-1-4',
    pathMatch: 'full',
  },
  {
    path: 'blog/anm/update-1-4',
    loadComponent: () =>
      import('./blog/anm/update-1-4/update-1-4.component').then(
        (m) => m.Update14Component
      ),
  },
  { path: '**', component: MissingPageComponent },
];
