import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-profileaddress',
  templateUrl: './profileaddress.component.html',
  styleUrls: ['./profileaddress.component.css']
})
export class ProfileaddressComponent implements OnInit {

  constructor(private data:DataService) { }

  async ngOnInit() {
    if(!this.data.address)
      await this.data.getAddress();
  }

}
