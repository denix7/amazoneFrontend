import { Injectable } from '@angular/core';

import { NavigationStart, Router } from "@angular/router";
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  message = '';
  messageType = 'danger';

  constructor(private router:Router, private rest:RestApiService) {
    this.router.events.subscribe(event => {
      this.message = '';
    })
   }

  error(message)
  {
    this.messageType = 'danger';
    this.message = message;
  }

  success(message)
  {
    this.messageType = 'success';
    this.message = message;
  }

  warning(message)
  {
    this.messageType = 'warning';
    this.message = message;
  }

  getProfile()
  {
    return this.rest.get('http://localhost:3030/api/accounts/profile');
  }
}
