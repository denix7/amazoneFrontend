import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { RestApiService } from '../../services/rest-api.service';

@Component({
  selector: 'app-profilesettings',
  templateUrl: './profilesettings.component.html',
  styleUrls: ['./profilesettings.component.css']
})
export class ProfilesettingsComponent implements OnInit {
  currentSettings:any;

  btnDisabled = false;

  constructor(private data:DataService, private rest:RestApiService) { }

  async ngOnInit() {
    try
    {
      if(!this.data.user)
      {
        await this.data.getProfile();
      }

      this.currentSettings = Object.assign({
        newPwd: '',
        pwdConfirm: ''
      }, this.data.user);
      console.warn(this.currentSettings);
    }
    catch(error)
    {
      this.data.error(error);
    }
  }
  
  validate(settings)
  {
    console.warn(this.currentSettings);
    if(settings['name'])
    {
      if(settings['email'])
      {
        if(settings['newPwd'])
        {
          if(settings['pwdConfirm'])
          {
            if(settings['newPwd'] === settings['pwdConfirm'])
            {
              return true;
            }
            else
            {
              this.data.warning('Password do not match');
            }
          }
          else
          {
            this.data.error('Confirm password is requerid');
          }
        }
        else
        {
          return true;
          this.data.error('New password is requerid');
        }
      }
      else
      {
        this.data.error('Email is requerid');
      }
    }
    else
    {
      this.data.error('Please enter your name')
    }
  }

  async update()
  {
    this.btnDisabled = false;
    try
    {
      if(this.validate(this.currentSettings))
      {
        const data = await this.rest.post(
          'http://localhost:3030/api/accounts/profile',
        {
          name: this.currentSettings['name'],
          email: this.currentSettings['email'],
          password: this.currentSettings['newPwd'],
          isSeller: this.currentSettings['isSeller']
        });

        data['success']
          ? (this.data.getProfile(), this.data.success(data['message']))
          : this.data.error(data['message']);
      }
    }
    catch(error)
    {
      this.data.error(error['message']);
    }
  }
}
