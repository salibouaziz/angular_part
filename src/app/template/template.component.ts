import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/AuthService';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  constructor(private auth: AuthService, private router : Router) { }
  logout():void{
    //appeler la fonction du service
this.auth.doLogout().then(()=>{
  this.router.navigate((['']))
})

  }

}
