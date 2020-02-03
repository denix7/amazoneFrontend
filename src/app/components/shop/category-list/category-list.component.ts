import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { RestApiService } from '../../../services/rest-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories = [];
  categoryId:any;

  constructor(private data:DataService, private rest:RestApiService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    
      this.getCategories();

  }

  
  async getCategories()
  {
    try
    {
      const data = await this.rest.get('http://localhost:3030/api/categories');
      data['success']
      ? this.categories = data['categories']
      : this.data.error(data['message']);
    }
    catch(error)
    {
      this.data.error(error['message']);
    }
  }

}
