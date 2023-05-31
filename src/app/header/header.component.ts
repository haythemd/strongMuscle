import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  categories !: Category[]
  constructor(private catService : CategoryService,
              private router : Router){
    
  }

  ngOnInit(): void {
    this.catService.getCategories().subscribe(
      res =>{
        this.categories=res;
        console.log("CATEGORIES : " , this.categories);
      },err=>{
        console.log("ERROR : " , err);
        
      }
    )
  }

  goToProduct(cat_name : string){
    this.router.navigate(['product-list', cat_name]);
  }



}
