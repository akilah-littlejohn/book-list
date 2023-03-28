import 'zone.js/dist/zone';
import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter, Route, RouterModule } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { TableComponent } from './table/table.component';

export const routes: Route[] = [
  {
    path: 'table',
    loadComponent: () =>
      import('./table/table.component').then((x) => x.TableComponent),
  },
  {
    path: 'info/:id',
    loadComponent: () =>
      import('./book-info-card/book-info-card.component').then(
        (x) => x.BookInfoCardComponent
      ),
  },
  {
    path: '',
    redirectTo: 'table',
    pathMatch: 'full',
  },
];
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, RouterModule, TableComponent],
  template: `
  <router-outlet></router-outlet>

  `,
})
export class App {}

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});
