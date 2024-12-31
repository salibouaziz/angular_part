import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, NG_VALIDATORS, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent {
form!:FormGroup;
constructor(private MS :MemberService,  private router :Router , private activatedRoute : ActivatedRoute) { }
  
  ngOnInit(): void {


//chercher la route active
const idcourant = this.activatedRoute.snapshot.params['id']
console.log(idcourant);
// if truely  hedi !!
if(!!idcourant){
this.MS.getMemberByid(idcourant).subscribe(
 
  (member) => {  this.form=new FormGroup({
    cin: new FormControl(member.cin ,[Validators.required]),
    name: new FormControl(member.name ,[Validators.required]),
  

    cv: new FormControl(member.cv ,[Validators.required]),
    type:new FormControl(member.type ,[Validators.required]),
  })
})

}
else{
  this.initform1()
}
//chercher id dans la route 
//if id exsite donc je suis dans le edit 
// sinon je suis dans create


  }
  sub():void{
//recupere data
console.log(this.form.value);

    const x={...this.form.value, createdDate:new Date().toISOString()} 
    const idcourant = this.activatedRoute.snapshot.params['id']
    if(!!idcourant) {
      this.MS.editMember(x,idcourant).subscribe( () => { this.router.navigate(['/member']);
      })
    }
    else{
    this.MS.add(x).subscribe(
 
    () => { this.router.navigate(['/member']);
})}

  }
initform1():void{
  this.form=new FormGroup({
    cin: new FormControl(null,[Validators.required]),
    name: new FormControl(null,[Validators.required]),
    cv: new FormControl(null,[Validators.required]),
    type:new FormControl(null,[Validators.required]),
  })
}

}
