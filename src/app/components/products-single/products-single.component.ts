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

  myReview = {
    title: '',
    description: '',
    rating: 0
  }

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

    }
    catch(error)
    {
      this.data.error(error['message']);
    }
  }

  async postReview()
  {
    try{
      const data = this.rest.post('http://localhost:3030/api/products/review' ,
      {
        productId: this.productId,
        title: this.myReview.title,
        description: this.myReview.description,
        rating: this.myReview.rating
      });

      data['success']
      ? (this.data.success(data['message']))
      : this.data.error(data['message']);

      this.getProduct();
      this.cleanForm();
    }
    catch(error)
    {
      this.data.error(error['message']);
    }

  }

  async cleanForm()
  {
    this.myReview.title = '';
    this.myReview.description = '';
    this.myReview.rating = 0;
  }

  addToCart()
  {
    this.data.addToCart(this.product)
    ? this.data.success('El producto fue agregado al carrito')
    : this.data.error('El producto ya existe en tu carrito')
  }
}
