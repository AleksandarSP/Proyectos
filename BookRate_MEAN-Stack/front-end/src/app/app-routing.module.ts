import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { PhotoListComponent } from './components/photo-list/photo-list.component'
import { PhotoFormComponent } from './components/photo-form/photo-form.component'
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component'
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
// import { MyReadingComponent } from './components/my-reading/my-reading.component';
import { AccountComponent } from './components/account/account.component';
import { MyReadingComponent } from './components/my-reading/my-reading.component';
import { GenreComponent } from './components/genre/genre.component'
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard'
import { AdminSigninComponent } from './components/admin-signin/admin-signin.component';
import { AdminBookPreviewComponent } from './components/admin-book-preview/admin-book-preview.component';

// -----------------------------------------
// set the routes to all the components
// -----------------------------------------

const routes: Routes = [
  {
    path: 'admin-signin',
    component: AdminSigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'genre',
    canActivate: [AuthGuard],

    component: GenreComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'account',
    canActivate: [AuthGuard],
    component: AccountComponent
  },
  {
    path: 'my-reading',
    canActivate: [AuthGuard],
    component: MyReadingComponent
  },
  {
    path: 'photos',
    canActivate: [AdminGuard],
    component: PhotoListComponent
  },
  {
    path: 'photos/new',
    canActivate: [AdminGuard],
    component: PhotoFormComponent
  },
  {
    path: 'photos/:id',
    component: PhotoPreviewComponent
  },
    {
    path: 'book/:id',
    component: AdminBookPreviewComponent
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
