import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { RestApiService } from '../../services/rest-api.service';

@Component({
  selector: 'app-products-me',
  templateUrl: './products-me.component.html',
  styleUrls: ['./products-me.component.css']
})
export class ProductsMeComponent implements OnInit {

  products = [];

  constructor(private data:DataService, private rest:RestApiService) { }

  ngOnInit() {
    this.getMyProducts();
  }

  async getMyProducts()
  {
    try{
      const data = await this.rest.get('http://localhost:3030/api/seller/products');
      
      this.data['success'] 
      ?(this.data.success (data['message']), this.products = data['products'])
      :this.data.error(data['message']); 
      
      console.warn(this.products);
    }
    catch(error)
    {
      this.data.error(error['message']);
    }
  }
}
