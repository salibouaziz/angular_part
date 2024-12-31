import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventService } from 'src/Services/event.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit{
 
  dataSource:Event[]=[]
  constructor(private es : EventService, private dialog : MatDialog) { }
 ngOnInit(): void {
   this.es.getAllEvent().subscribe((data)=>{
    this.dataSource=data;
   })
  }
  displayedColumns: string[] = ['id', 'titre', 'datedebut', 'datefin','lieu','icon'];
  open() {
    let dialogRef = this.dialog.open(ModalComponent, {
      height: '500px',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(
      data =>{if(data){
        this.es.createEvent(data).subscribe(()=>{
          this.es.getAllEvent().subscribe((data)=>{
            this.dataSource=data
          })
        
        })
      }
      }
    )
  }



}
