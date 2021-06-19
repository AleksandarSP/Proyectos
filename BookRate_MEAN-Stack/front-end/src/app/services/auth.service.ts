import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// authentification global configuration (user and adminUser)

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:4000/api';

  constructor(private http: HttpClient, private router: Router) { 

  }
  user;

  signUp(user){
    this.user = user;
    return this.http.post<any>(this.URL + '/signup', user);
  }
  signIn(user){
    this.user = user;
    return this.http.post<any>(this.URL + '/signin', user)
  }

  adminSignIn(adminUser){
    return this.http.post<any>(this.URL + '/admin-signin', adminUser)
  }

  adminLoggedIn(): Boolean{
    return !!localStorage.getItem('admin-token') 
  }

  loggedIn(): Boolean{
    return !!localStorage.getItem('token') 
  }

  adminGetToken(){
    return localStorage.getItem('admin-token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  adminLogout(){
    localStorage.removeItem('admin-token');
    this.router.navigate(['/admin-signin'])
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin'])
  }
}


