import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { RestApiService } from '../../services/rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  btnDisabled = false;

  constructor(private router:Router, private data:DataService, private rest:RestApiService) { }

  ngOnInit() {
  }

  validate()
  {
    if(this.email)
      if(this.password)
        return true;
      else
      {
        this.data.error('Password is requerid')
      }
    else
    {
      this.data.error('Email is requerid');
    }
  }

  async login()
  {
    try{
      if(this.validate())
      {
        const data = await this.rest.post(
          'http://localhost:3030/api/accounts/login',
          {
            email: this.email,
            password: this.password
          }
        );
        if(data['success'])
        {
          localStorage.setItem('token', data['token']);
          await this.data.getProfile();
          this.router.navigate(['/']);
          this.data.success('Login succesfull');
        }
        else
        {
          this.data.error(data['message']);
        }
      }
    }
    catch(error)
    {
      this.data.error(error['message']);
    }

    this.btnDisabled = false;
  }
}
