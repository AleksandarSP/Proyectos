import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { Book } from './services/book.service'
import { PhotoService } from './services/photo.service'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { MyReadingComponent } from './components/my-reading/my-reading.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component';
import { GenreComponent } from './components/genre/genre.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { AdminSigninComponent } from './components/admin-signin/admin-signin.component'
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AdminBookPreviewComponent } from './components/admin-book-preview/admin-book-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    GetStartedComponent,
    HomeComponent,
    AccountComponent,
    MyReadingComponent,
    PhotoFormComponent,
    PhotoListComponent,
    PhotoPreviewComponent,
    GenreComponent,
    SignupComponent,
    SigninComponent,
    AdminSigninComponent,
    AdminBookPreviewComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    // APP_ROUTING
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi   : true,
    },
    Book,
    PhotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
