import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { RestApiService } from '../../services/rest-api.service';

@Component({
  selector: 'app-profileaddressedit',
  templateUrl: './profileaddressedit.component.html',
  styleUrls: ['./profileaddressedit.component.css']
})
export class ProfileaddresseditComponent implements OnInit {
  currentAddress:any;
  constructor(private data:DataService, private rest:RestApiService) { }
  
  async ngOnInit() {
    try
    {
      const data = await this.rest.get('http://localhost:3030/api/accounts/address'); 
      

      if(JSON.stringify(data['address']) === '{}' && this.data.message === '')
      {
        this.data.warning('No ha ingresado su direccion de envio, por favor actualice su direccion');
      }

      this.currentAddress = data['address'];
      console.warn(data)
    }
    catch(error)
    {
      this.data.error(error);
    }
  }
  
  async updateAddress()
  {
    try{
        const data = await this.rest.post('http://localhost:3030/api/accounts/address', this.currentAddress);
      console.warn(this.data);

      data['success']
        ?(this.data.getProfile(), this.data.success(data['message']))
        : this.data.error(data['message']);
      }
    catch(error)
    {
      this.data.error(error['message']);
    }
  }
}