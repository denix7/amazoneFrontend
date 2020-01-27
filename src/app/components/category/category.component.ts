import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { RestApiService } from '../../services/rest-api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private btnDisabled = false;
  private newCategory;
  private categories;

  private currentCategory;

  constructor(private data:DataService, private rest:RestApiService) { }

  async ngOnInit() {
    this.getCategories();
  }

  async getCategories()
  {
    try
    {
      const data = await this.rest.get(
        'http://localhost:3030/api/categories'
      );

      data['success']
        ? this.categories = data['categories']
        : this.data.error(data['message']);
        
    }
    catch(error)
    {
      this.data.error(error['message']);
    }
  }

  async saveCategory()
  {
    this.btnDisabled = true;
    try{
      if(this.newCategory)
      {
        const data = await this.rest.post(
          'http://localhost:3030/api/categories',
          {
            name: this.newCategory
          });

          if(data['success'])
          {
            this.data.success('Category add successful');
            this.getCategories();
            console.warn(this.categories)
          }
          else
          {
            this.data.error(data['message']);
          }
      }
    }catch(error)
    {
      this.data.error(error['message']);
    }
  }

  async deleteCategoy(id)
  {

  }
}
