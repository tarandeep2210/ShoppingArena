import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ProductService } from '../product/product.service';
import { Product } from './product.model';



@Injectable({
  providedIn: 'root'
})
export class ProductsResolverService implements Resolve<Product[]> {
  // products: Product[];

  
  constructor(private productService: ProductService,
    private router: Router) { }

    resolve(route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<Product[]> {
  // let id = route.params['id'];
  // let id = route.paramMap.get('id');
  // if (isNaN(+id)) {
  //     console.log(`Product id was not a number: ${id}`);
  //     this.router.navigate(['/products']);
  //     return Observable.of(null);
  // }
   return this.productService.getProducts().pipe(map(products => { console.log(products); if(products) { return products; } } )  );
    
  
      
}
}
