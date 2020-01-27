import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { RestApiService } from '../../services/rest-api.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  category;
  currentCategory = '';
  idCategory='';
  constructor(private activatedRoute:ActivatedRoute, private router:Router, private data:DataService, private rest:RestApiService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      this.idCategory = paramMap.get('categoryId');
      console.warn(this.idCategory);
      this.category = this.rest.get('http://localhost:3030/api/categories/');

      this.updateCategory();
    });
  }

  async updateCategory()
  {
    if(this.currentCategory)
    {
      try{
        const data = await this.rest.put(
          'http://localhost:3030/api/categories/'+this.idCategory,
          {
            name: this.currentCategory
          });
      console.warn('http://localhost:3030/api/categories/'+this.idCategory);
      
      data['success']
      ? this.data.success(data['message'])
      : this.data.error(data['message']);
      this.router.navigate(['/categories']);
    }
    catch(error)
    {
      this.data.error(error['message']);
    }
    }
  }
  
}
