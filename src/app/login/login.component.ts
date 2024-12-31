import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
//injection de dependance 
constructor(private auth: AuthService, private router : Router) { }

//equivalent de subscribe howa then ki nesta3mel promise
  signin():void{
    //appeler la fonction du service
this.auth.doGoogleLogin().then(()=>{
  this.router.navigate((['/member']))
})

  }
}
