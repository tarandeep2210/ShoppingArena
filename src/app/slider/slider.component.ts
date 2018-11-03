import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ProductService } from '../product/product.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  products: Observable<Product[]>;
  spin:boolean=true;

  constructor(private db: AngularFirestore, private service:ProductService,private route : ActivatedRoute) {
  
    // this.route.data.subscribe(
    //   data => this.products = data['allproducts']
    // );
    // console.log(this.products);
    


   
    
  }

  // addPost() {
  //   this.db.collection('products').add({'name': 'macbook'});
  // }

  ngOnInit():void {
    this.products = this.service.getProducts();
    // console.log(this.products);
    this.service.getProducts().subscribe(() => this.spin=false);


    // this.route.data.subscribe(
    //   data => this.products = data['allproducts']
    // );
    // this.service.getProducts().subscribe(products => {
    //   this.products=products;
    //   console.log(this.products);
    // });
   // this.products = this.route.snapshot.data['allproducts'];

  }

}
