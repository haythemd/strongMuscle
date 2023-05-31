import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products ! : Product[]
  category !: string;
  constructor(private prodService : ProductService,
              private activatedR : ActivatedRoute){

  }

  ngOnInit(): void {
    this.category = this.activatedR.snapshot.params['cat_name'];
    console.log("SELECTED CAT:", this.category);

    this.getAllProdsByCat(this.category);

  }

  getAllProdsByCat(cat_name :string){
    this.prodService.getAllProdsByCatName(cat_name).subscribe(
      res =>{
        this.products=res;
        console.log("PRODUCTS  : " , this.products);
      },err=>{
        console.log("ERROR : " , err);
        
      }
    )
  }

}
