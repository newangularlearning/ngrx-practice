import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl:string="https://jsonplaceholder.typicode.com";
  constructor(private http:HttpClient) { }

  getData(url){
    return this.http.get(this.apiUrl+url);
  }

  postData(url,body){
    let headers = new HttpHeaders({'Content-type':'application/json'});
    return this.http.post(this.apiUrl+url,body,{headers});
  }
}
