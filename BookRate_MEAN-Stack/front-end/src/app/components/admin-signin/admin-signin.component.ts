import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})
export class AdminSigninComponent implements OnInit {

  adminUser;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.adminUser = {}
  }

  ngOnInit(): void {
  }

  adminSignIn(){
    this.authService.adminSignIn(this.adminUser)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('admin-token', res.token)
        this.router.navigate(['/home'])
      },
      err => {console.log(err)}
    )
  }

}
