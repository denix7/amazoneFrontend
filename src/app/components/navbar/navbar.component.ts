import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'amazone-store-Frontend';
  searchTerm = '';
  isCollapsed = true;

  constructor(private router:Router, private data: DataService) {
    this.data.getProfile();
  }
  
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
    this.data.user = null;
    localStorage.clear();
    this.router.navigate(['']);
  }
}
