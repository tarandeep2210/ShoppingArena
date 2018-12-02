import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ProductService } from '../product/product.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Product } from '../product/product.model';
import { DataService } from '../data.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  products: Observable<any[]>;
  filteredProducts: Product[];
  searchString:string="" ;

  // _listFilter = '';
  // get listFilter(): string {
  //   return this._listFilter;
  // }
  // set listFilter(value: string) {
  //   this._listFilter = value;
  //   // this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  // }



  constructor(private dataservice: DataService,private db: AngularFirestore, private service:ProductService,private route : ActivatedRoute) {
  
    // this.route.data.subscribe(
    //   data => this.products = data['products']

    // );
    
  //   [
  //     { "id" : 1,
  //   "name" : "iPhone",
  //  "category" : "electronics"},

  //   ];

  // this.dataservice.searchdata.subscribe( (data : string) => this.searchString = data);
  this.dataservice.searchdata.subscribe(
    (data: string) => {this.searchString = data;
    console.log(data);
    // this.products =
    this.service.searchProducts(this.searchString).subscribe((data: Product[]) => this.filteredProducts=data); 

    }
  );
}

ngOnInit(){

}
  }

  //  performFilter(filterBy: string): Product[] {
  //   filterBy = filterBy.toLocaleLowerCase();
  //   return this.products.filter((product: Product) =>
  //     product.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  // }

//   ngOnInit() {
   
 

// }
// }
