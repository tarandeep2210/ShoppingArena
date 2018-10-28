import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ProductService } from '../product/product.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  products: Observable<any[]>;

  constructor(private db: AngularFirestore, private service:ProductService,private route : ActivatedRoute) {
  
    // this.route.data.subscribe(
    //   data => this.products = data['products']
    // );
    this.products=this.service.getProducts();
  }

  // addPost() {
  //   this.db.collection('products').add({'name': 'macbook'});
  // }

  ngOnInit() {


  }

}
