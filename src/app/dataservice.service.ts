import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
headers : HttpHeaders;

  constructor(private http:HttpClient){
    this.headers = new HttpHeaders().set('content-type', 'application/json');
  }

postuserinfo(value:any):Observable<any>{
  return this.http.post<any>('api/senddata',value)
}

authuser(user:any):Observable<boolean>{
  return this.http.post<boolean>('api/checkuser',user);
}
 
quizdata():Observable<any[]>{
 return this.http.get<any[]>('api/quiz');
}


}