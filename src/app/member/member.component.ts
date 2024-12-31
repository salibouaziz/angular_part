import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/Models/Member';
import { MemberService } from 'src/Services/member.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(private MS : MemberService, private route: Router, private dialog : MatDialog) { }

  
//saisir tableau
dataSource :Member[]=[
  
]
ngOnInit(): void {
  //appeler la fonction du service getAllMembers
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  //injection de dependance : injecter un service dans un composant
  //constructor private de service de type member service 
  this.MS.getAllMembers().subscribe(
    (data : Member[]) => { this.dataSource=data;
})


}
//injection de dependance
delete(id : string ) : void{

  //1/ lancer la boite
  let dialogRef = this.dialog.open(ConfirmDialogComponent, {
    height: '300px',
    width: '300px',
  });
  //2 attendre le resultat de click
  //dialog joue le role d'un observer wel member component ya3mel subscriber bel open yestana fel result
  dialogRef.afterClosed().subscribe(result => {
      //3 si click est ok  do this fasa5 ma3neha
    if(result){
      this.MS.deleteMember(id).subscribe(
 
        () => { this.MS.getAllMembers().subscribe(
          (data : Member[]) => { this.dataSource=data;
      })
      
    })
    }
    else{
      dialogRef.close();
    } 
  });

  //4 si click est cancel do nothing

}
displayedColumns: string[] = ['id', 'cin', 'name', 'type','cv','createddate','icon'];














}

 