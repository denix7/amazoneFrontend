import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private _http:HttpClient) {}

  sendMessage(body)
  {
    return this._http.post('http://localhost:3030/api/email', body);
  }
}
