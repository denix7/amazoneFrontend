import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { RestApiService } from '../../../services/rest-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.css']
})
export class ProductsByCategoryComponent implements OnInit {

  categoryId: any;
  category: any;
  page = 1;

  products = [];

  constructor(private data:DataService, private rest:RestApiService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      this.categoryId = res['id'];
      this.getProducts();
    });
  }

  get lower()
  {
    return 10 * (this.page - 1) + 1;
  }

  get upper()
  {
    return Math.min(10 * this.page, this.category.totalProducts);
  }

  async getProducts(event ? : any)
  {
    if(event)
    {
      this.category = null;
    }

    try
    {
      const data = await this.rest.get(`http://localhost:3030/api/categories/${this.categoryId}?page=${this.page - 1}`);
      data['success']
      ? this.products = data['products']
      : this.data.error(data['message']);
      
    }
    catch(error)
    {
      this.data.error(error['message'])
    }
  }
}
