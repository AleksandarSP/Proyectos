import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

// adming signin config
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ){
  }
  canActivate(): boolean {
    if(this.authService.adminLoggedIn()){
      return true
    }
    this.router.navigate(['/admin-signin']);
      return false
  }
  
}
