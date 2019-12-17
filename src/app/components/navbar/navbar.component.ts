import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'amazone-store-Frontend';
  searchTerm = '';
  isCollapsed = true;

  constructor(private router:Router) { }

  ngOnInit() {}

  getToken()
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

  search()
  {
    
  }

  logout()
  {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
