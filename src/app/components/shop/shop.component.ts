import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { RestApiService } from '../../services/rest-api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products = [];

  categoryId;
  category: any;
  page = 1;

  constructor(private data:DataService, private rest:RestApiService) { }

  ngOnInit() {
    this.getProducts();
  }

  async getProducts()
  {
    try
    {
      const data = await this.rest.get('http://localhost:3030/api/products');
    
      this.data['success']
      ?(this.data.success(data['message']) , this.products = data['products'])
      :this.data.error(data['message']);

    }
    catch(error)
    {
      this.data.error(error['message']);
    }
  }
}
