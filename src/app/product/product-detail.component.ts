import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '../../../node_modules/@angular/router';
import { AngularFirestoreDocument } from '../../../node_modules/@angular/fire/firestore';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  // product: Observable<any>;
  products: Observable<any[]>;

  constructor(private service: ProductService,private route: ActivatedRoute) { 
    let id = +this.route.snapshot.paramMap.get('id');
    // console.log(id);
    this.products = this.service.getProduct(id);
    // this.product=this.products[0];
    // this.products= this.product.valueChanges();
  }

  ngOnInit() {
  }
  

}
