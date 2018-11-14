import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { DataService } from '../data.service';

// interface Product{
//   name : string;
// }
// interface ProductId extends Product { 
//   id: string; 
// }
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // product: Observable<any>;
  productCol: AngularFirestoreCollection<Product>;
  products : Observable<Product[]>;
  spin : boolean=true;
  product :Product[]=[];
  userCart: Product[]=[];
  // =[{
  //   name : "HONOR 7x",
  //   id : 1,
  //   category:"electronics"
  // },];


  constructor(public db: AngularFirestore,private dataservice:DataService) {
    // this.products = this.db.collection('products').valueChanges();

  }

  // addPost() {
  //   this.db.collection('products').add({'name': 'macbook'});
  // }

  searchProducts(start: string): Observable<any[]> {
    return  this.db.collection('products' , ref =>ref.orderBy("name").startAt(start).endAt(start + "\uf8ff")).valueChanges();
    // return this.db.collection('products', ref => ref.where("category", '==', "electronics") ).valueChanges();

        }
  getProducts(): Observable<Product[]> {
  // this.spin = false;
  //  this.dataservice.spin.next(this.spin);
    
   return this.db.collection('products' , ref =>ref.limit(6)).valueChanges();
   
    // return  this.db.collection('products').valueChanges();
    // return this.db.collection('products', ref => ref.where("category", '==', "electronics") ).valueChanges();

        }

  getCartProducts(): Product[] {
  return this.userCart;
  }

  addToCart(id : number){
    this.getProduct(id);
    this.getProduct(id).subscribe( (data :Product[])=> {this.product = data
    console.log(this.product);

      this.userCart = this.userCart.concat(this.product);
    console.log(this.userCart);
    this.getCartProducts();
    
    });
  }

  getCategoryProducts(category : string): Observable<any[]> {
          // return  this.db.collection('products').valueChanges();
          return this.db.collection('products', ref => ref.where("category", '==', category) ).valueChanges();
      
              }

  getProduct(id : number): Observable<Product[]> {

    return this.db.collection('products', ref => ref.where('id', '==', id) ).valueChanges();
    // this.productDoc= this.db.doc('products/' + '2')
    // this.productDoc = this.db.doc('products/'+id);
    
    // this.product= this.productDoc.valueChanges();
    // console.log(this.productDoc);
    // return this.productDoc;
    
              }
}