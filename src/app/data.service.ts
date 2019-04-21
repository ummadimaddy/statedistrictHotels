import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
// import {states} from '../assets/logindata.json';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  fetchlogindata() {
    return this.http.get('../assets/logindata.json');
  }
  fetchhotels() {
    return this.http.get('../assets/hotels.json');
  }
}
