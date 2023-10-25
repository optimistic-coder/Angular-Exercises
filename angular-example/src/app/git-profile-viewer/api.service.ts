import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://api.github.com/users/'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  fetchData(username:string) {
    return this.http.get(this.apiUrl+username);
  }
}
