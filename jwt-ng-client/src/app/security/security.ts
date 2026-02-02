import { Component, OnInit } from '@angular/core';
import { JwtClient } from '../jwt-client';

@Component({
  selector: 'app-security',
  imports: [],
  templateUrl: './security.html',
  styleUrl: './security.css',
})
export class Security implements OnInit{

  authRequest: any = {
    "userName":"basant",
    "password": "1234"
  }

  response: any;

  constructor(private service: JwtClient) { }

  ngOnInit(): void {
    this.getAccessToken(this.authRequest);  // once component loads, getAccessToken() method will be automatically called
  }

  // generate jwt token from spring boot app by internal call to backend spring boot app
  public getAccessToken(authRequest: any){
    let resp =this.service.generateToken(authRequest);
    resp.subscribe(data => {
      this.accessApi(data);

      console.log("Token : " +data);  // for understanding purpose printing it in browser console

    });
  }

  // pass the token as input generated token from getAccessToken() and pass it to accessApi(token) as request authorization headers to access other endpoints
  public accessApi(token:string) {
    let resp = this.service.welcome(token);
    resp.subscribe(data => {
      this.response = data;
      console.log("response : " +data);
    });
  }

}
