import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Product{
  name : string;
}
interface ProductId extends Product { 
  id: string; 
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products : any;
  product: Observable<any>;
  productDoc: AngularFirestoreDocument<any>;

  constructor(private db: AngularFirestore) {
    // this.products = db.collection('products').valueChanges();
  }

  // addPost() {
  //   this.db.collection('products').add({'name': 'macbook'});
  // }

  searchProducts(start: string): Observable<any[]> {
    return  this.db.collection('products' , ref =>ref.orderBy("name").startAt(start).endAt(start + "\uf8ff")).valueChanges();
    // return this.db.collection('products', ref => ref.where("category", '==', "electronics") ).valueChanges();

        }
  getProducts(): Observable<any[]> {
    return  this.db.collection('products').valueChanges();
    // return this.db.collection('products', ref => ref.where("category", '==', "electronics") ).valueChanges();

        }

  getCategoryProducts(category : string): Observable<any[]> {
          // return  this.db.collection('products').valueChanges();
          return this.db.collection('products', ref => ref.where("category", '==', category) ).valueChanges();
      
              }

  getProduct(id : number): Observable<any[]> {

    return this.db.collection('products', ref => ref.where('id', '==', id) ).valueChanges();
    // this.productDoc= this.db.doc('products/' + '2')
    // this.productDoc = this.db.doc('products/'+id);
    
    // this.product= this.productDoc.valueChanges();
    // console.log(this.productDoc);
    // return this.productDoc;
    
              }
}