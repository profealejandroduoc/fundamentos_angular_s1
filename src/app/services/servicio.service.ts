import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }

  getDatos(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
