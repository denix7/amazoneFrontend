import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../services/rest-api.service';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-single',
  templateUrl: './products-single.component.html',
  styleUrls: ['./products-single.component.css']
})
export class ProductsSingleComponent implements OnInit {

  product;
  productId;

  constructor(private activatedRoute:ActivatedRoute, private rest:RestApiService, private data:DataService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      this.productId = paramMap.get('productId');
      console.warn(this.productId);
    });

    this.getProduct();
  }

  async getProduct()
  {
    try
    {
      const data = await this.rest.get('http://localhost:3030/api/product/'+this.productId);
  
      data['success']
      ? (this.product = data['product'])
      : this.data.error(data['message']);

      console.warn(this.product);
    }
    catch(error)
    {
      this.data.error(error['message']);
    }
  }

}
