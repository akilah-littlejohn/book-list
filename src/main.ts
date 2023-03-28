import 'zone.js/dist/zone';
import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter, Route, RouterModule } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { TableComponent } from './table/table.component';

export const routes: Route[] = [
  {
    path: 'table',
    pathMatch: 'full',
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
];
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, RouterModule, TableComponent],
  template: `
  <app-table><app-table>

  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});