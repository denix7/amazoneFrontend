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

  lower;
  upper;

  products;
  totalProducts = '';
  categoryName = '';
  pages= '';

  constructor(private data:DataService, private rest:RestApiService, private activatedRoute:ActivatedRoute) { }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      this.categoryId = res['id'];
      this.getProducts();
      this.setMaxMin()
      
      
    });
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
      ? (this.products = data['products'], this.totalProducts = data['totalProducts'], this.categoryName = data['categoryName'].name, this.pages = data['pages'])
      : this.data.error(data['message']);
    
    }
    catch(error)
    {
      this.data.error(error['message'])
    }
  }

  setMaxMin()
  {
      this.lower = 10 * (this.page - 1) + 1;
    
      this.upper = Math.max(10 * this.page, +this.totalProducts);

      console.warn(this.totalProducts);
  }
}
