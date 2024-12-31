import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{

  constructor(public dialogRef: MatDialogRef<ModalComponent>) { }
ngOnInit(): void {
 this.initform1;
}

form!:FormGroup;

initform1():void{
  this.form=new FormGroup({
    titre: new FormControl(null,[Validators.required]),
    datedebut: new FormControl(null,[Validators.required]),
    datefin: new FormControl(null,[Validators.required]),
    lieu:new FormControl(null,[Validators.required]),
  })
}
save() {
  this.dialogRef.close(this.form.value);
}

close() {
  this.dialogRef.close();
}


}
