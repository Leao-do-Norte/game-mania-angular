import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../models/user";
import { TagContentType } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }
          url = "http://localhost:3000/login"
  
  login(usuario: User): Observable<any>{
    return this.httpClient.post(this.url, JSON.stringify(usuario),{
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: "response"
    })
  }
}
