import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../services/rest-api.service';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-sale',
  templateUrl: './product-sale.component.html',
  styleUrls: ['./product-sale.component.css']
})
export class ProductSaleComponent implements OnInit {

  private name:string = '';
  private price:string = '';
  private description:string = '';
  private category:string;

  constructor(private router: Router, private rest: RestApiService, private data:DataService) { }

  ngOnInit() {
  }

  async createProduct()
  {
    console.warn('product sale');
    try{
      const data = await this.rest.post('http://localhost:3030/api/seller/products', 
    {
      name : this.name,
      price : this.price,
      description: this.description
    });

    if(data['success'])
    {
      this.data.success('Product created successful');
      this.router.navigate(['profile/products/my-products'])
    }
    else
    {
      this.data.error(data['message']);
    }
    }
    catch(error)
    {
      this.data.error(error['message']);
    }
  }
}
