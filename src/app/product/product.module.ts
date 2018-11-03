import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { ProductsResolverService } from './products-resolver.service';


@NgModule({
  imports: [
    CommonModule
    // RouterModule.forChild([
    //   {
    //   path: '',
    //   component: ProductDetailComponent
    // },

    // ])
  ],
  declarations: [
    
  ],
  providers:[
    ProductService,
    ProductsResolverService,
  ]
})
export class ProductModule { }
