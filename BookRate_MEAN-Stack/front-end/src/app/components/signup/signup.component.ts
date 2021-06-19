import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user;

  constructor(
    private AuthService: AuthService,
    private router: Router
    ) 
  {
    this.user = {}
  }

  ngOnInit(): void {
  }

  signUp(){
    this.AuthService.signUp(this.user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this.router.navigate(['/home'])
        },
        err => {console.log(err)}
      )
    
  }

}
