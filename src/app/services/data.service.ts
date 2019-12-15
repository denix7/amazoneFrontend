import { Injectable } from '@angular/core';

import { NavigationStart, Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  message = '';
  messageType = 'danger';

  constructor(private router:Router) {
    this.router.events.subscribe(event => {
      this.message = 'welcome!';
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
}
