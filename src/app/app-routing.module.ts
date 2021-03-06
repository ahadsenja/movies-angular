import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { MovieCreateComponent } from './components/movies/movie-create/movie-create.component';
import { MovieUpdateComponent } from './components/movies/movie-update/movie-update.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'movies', component: MovieListComponent, canActivate: [AuthGuard] },
  { path: 'movies/create', component: MovieCreateComponent, canActivate: [AuthGuard] },
  { path: 'movies/edit/:id', component: MovieUpdateComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
