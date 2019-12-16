import { Component } from '@angular/core';

import { Router } from "@angular/router";
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amazone-store-Frontend';
  searchTerm = '';
  isCollapsed = true;

  constructor(private router:Router, private data:DataService)
  {
  }

  gettoken()
  {
    return localStorage.getItem('token');
  }

  collapse()
  {
    this.isCollapsed = true;
  }

  closeDropdown(dropdown)
  {
    dropdown.close();
  }

  logout()
  {
    localStorage.clear();
    this.router.navigate(['']);
  }

  search()
  {
    
  }
}
