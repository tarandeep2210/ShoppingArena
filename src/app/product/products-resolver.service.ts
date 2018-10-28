import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductService } from '../product/product.service';



@Injectable({
  providedIn: 'root'
})
export class ProductsResolverService implements Resolve<any> {

  products: Observable<any[]>;
  constructor(private productService: ProductService,
    private router: Router) { }

    resolve(route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<any> {
  // let id = route.params['id'];
  // let id = route.paramMap.get('id');
  // if (isNaN(+id)) {
  //     console.log(`Product id was not a number: ${id}`);
  //     this.router.navigate(['/products']);
  //     return Observable.of(null);
  // }
  this.products = this.productService.getProducts();
  console.log(this.products);
  return this.products;
      
}
}
