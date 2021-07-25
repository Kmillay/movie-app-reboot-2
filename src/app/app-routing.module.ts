import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {MoviesComponent} from './movies/movies.component';
import {AuthGuard} from './auth/auth.guard';
import {NewMoviesComponent} from 'src/app/movies/new-movies/new-movies.component';

const routes: Routes = [
  { path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    pathMatch: 'full',
    component: MoviesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: MoviesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'movies/new',
    pathMatch: 'full',
    component: NewMoviesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: AuthComponent
  },
  {
    path: 'signup',
    pathMatch: 'full',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
