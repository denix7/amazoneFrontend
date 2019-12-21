import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ThrowStmt } from '@angular/compiler';
import { RestApiService } from '../../services/rest-api.service';

@Component({
  selector: 'app-profileaddress',
  templateUrl: './profileaddress.component.html',
  styleUrls: ['./profileaddress.component.css']
})
export class ProfileaddressComponent implements OnInit {

  currentAddress:any;
  constructor(private data:DataService, private rest:RestApiService) { }

  async ngOnInit() {
    try
    {
      const data = await this.rest.get('http://localhost:3030/api/accounts/address'); 
      

      if(JSON.stringify(data['address']) === '{}')
      {
        this.data.warning('No ha ingresado su direccion de envio, por favor actualice su direccion');
      }

      this.currentAddress = data['address'];
      console.warn(this.currentAddress)
    }
    catch(error)
    {
      this.data.error(error);
    }
  }

}
