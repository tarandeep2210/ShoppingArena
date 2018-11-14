import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ProductService } from '../product/product.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Observable<Product[]>;
  counter : number = 0;
  userCart: Product[];



  constructor(private db: AngularFirestore, private service:ProductService,private route : ActivatedRoute) {
  }

  ngOnInit() {
    this.userCart = this.service.getCartProducts();

  }

  removeProduct(id: number){
        this.userCart = this.userCart.filter(product => product.id !== id); console.log(this.userCart)
  }
    
  // removeArrayItem(objectitem){ this.totalArrayData = this.totalArrayData.filter(item => item.Id !== objectitem.id); console.log( this.totalArrayData) }

increment(){
  this.counter += 1;
}

decrement(){
  this.counter -= 1;
}

}
