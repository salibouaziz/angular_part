import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/Models/Member';
//decorateur qui peut d'injecter le service dans les composants
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  nbmembers:number=0;
constructor(private http : HttpClient){}
getAllMembers() : Observable<Member[]>{
{
  //envoyer une requete http vers le back
  return this.http.get<Member[]>('http://localhost:3000/members');
}
}
add(m:Member) : Observable<void>{

  //envoyer une requete http vers le back
  return this.http.post<void>('http://localhost:3000/members',m);

}

deleteMember(id: string): Observable<void>{

  //envoyer une requete http vers le back
  return this.http.delete<void>(`http://localhost:3000/members/${id}`);

}
getMemberByid(id :string): Observable<Member>{

  //envoyer une requete http vers le back
  return this.http.get<Member>(`http://localhost:3000/members/${id}`);

}
editMember(m:Member,id : string): Observable<void>{

  //envoyer une requete http vers le back
  return this.http.put<void>(`http://localhost:3000/members/${id}`,m);

}

compterNbMembers():number{

  this.getAllMembers().subscribe((data)=>
 {this.nbmembers=data.length;
} )
return this.nbmembers;
}

}
