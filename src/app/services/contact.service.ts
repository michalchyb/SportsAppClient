import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const CONTACT_API = 'http://localhost:8080/api/contact/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  contact(user): Observable<any> {
    return this.http.post(CONTACT_API, {
      username: user.username,
      email: user.email,
      subject: user.subject,
      message: user.message
    }, httpOptions)
  }
}