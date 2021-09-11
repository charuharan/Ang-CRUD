import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl: string="https://jsonplaceholder.cypress.io/";  
  constructor(private http: HttpClient) { }
  
  listUsers(){
    return this.http.get(this.baseurl + "users")
  }
}
