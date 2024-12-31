import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  nbevents: number=0;
  constructor(private http:HttpClient) { }



  getAllEvent():Observable<Event[]>{
    return this.http.get<Event[]>('http://localhost:3000/event');
  }

  createEvent(e:Event) : Observable<void>{

    //envoyer une requete http vers le back
    return this.http.post<void>('http://localhost:3000/event',e);
  
  }
  compterNbEvent():number{

    this. getAllEvent().subscribe((data)=>
   {this.nbevents=data.length;
  } )
  return this.nbevents;
  }
  
  
  
}
