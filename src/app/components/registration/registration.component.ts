import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { RestApiService } from '../../services/rest-api.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  name = '';
  email = '';
  password = '';
  password1 = '';
  isSeller = false;

  btnDisabled = false;

  constructor(private router: Router, private data: DataService, private rest: RestApiService) { }

  ngOnInit() {
  }

  validate()
  {
    if(this.name)
    {
      if(this.email)
      {
        if(this.password)
        {
          if(this.password1)
          {
            if(this.password == this.password1)
              return true;
            else
              this.data.warning('Password do not match');
          }
          else
          {
            this.data.error('Confirmation password is not entered');
          }
        }
        else
        {
          this.data.error('Password is not entered');
        }
      }
      else
      {
        this.data.error('Email is not entered');
      }
    }
    else
    {
      this.data.error('Name is not entered');
    }
  }

  async register()
  {
    this.btnDisabled = false;
    try{
      if(this.validate())
      {
        const data = await this.rest.post(
          'http://localhost:3030/api/accounts/signup',
          {
            name : this.name,
            email: this.email,
            password: this.password,
            isSeller: this.isSeller
          }
        );
        if(data['success'])
        {
          localStorage.setItem('token', data['token']);
          this.data.success('Registration succesful');
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