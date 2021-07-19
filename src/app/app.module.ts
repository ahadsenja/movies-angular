import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { MovieCreateComponent } from './components/movies/movie-create/movie-create.component';
import { RegisterComponent } from './components/user/register/register.component';
import { MovieUpdateComponent } from './components/movies/movie-update/movie-update.component';
import { MoviesDetailComponent } from './components/movies/movies-detail/movies-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MovieListComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    MovieCreateComponent,
    RegisterComponent,
    MovieUpdateComponent,
    MoviesDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
