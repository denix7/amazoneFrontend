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

  formulario = {
    name: '',
    price: '',
    description: '',
    image: null,
    category: ''
  }

  image:string;


  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, .gif, .jpeg",
    maxSize: "20",
    uploadAPI:  {
      url:"http://localhost:3030/api/seller/products/upload-image"
    },
    theme: "attachPin",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false,
}; 



  constructor(private router: Router, private rest: RestApiService, private data:DataService) { }

  ngOnInit() {
  }

  async createProduct(form)
  {
    try{
      const data = await this.rest.post('http://localhost:3030/api/seller/products', form);

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

  imageUpload(data)
  {
    let image_data = JSON.parse(data.response);
    this.formulario.image = image_data.image;
  }
}
