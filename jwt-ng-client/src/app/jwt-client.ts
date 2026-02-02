import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JwtClient {

  constructor(private http: HttpClient){

  }
  

  // authenticate and generate jwt token
  public generateToken(request:any)  {
    return this.http.post("http://localhost:8080/authenticate", request, {responseType: 'text'});
  }

  // pass jwt token as parameter and access endpoint
  public welcome(token:string) {
    let tokenStr = "Bearer " + token;
    const headers = new HttpHeaders({Authorization: tokenStr}); // pass the jwt token as authorization header
    return this.http.get("http://localhost:8080/", {headers,responseType: 'text'});
  }

}
