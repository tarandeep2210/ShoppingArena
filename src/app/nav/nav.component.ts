import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '../../../node_modules/@angular/router';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  signedin:boolean=false;
  userCart: Product[];
  cartLength: number ;

  constructor(private dataservice: DataService,private router:Router, private service:ProductService) { }

  listFilter:string = '';
  // get listFilter(): string {
  //   return this._listFilter;
  // }
  // set listFilter(value: string) {
  //   this._listFilter = value;
  //   // this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  // }



  ngOnInit() {
    this.dataservice.updatedata.subscribe(
      (response: boolean) => this.signedin = response
    );
    // this.userCart = this.service.getCartProducts();
    this.dataservice.cartLength.subscribe((data :number) =>  this.cartLength= data);
  }

  onclick() {
    this.signedin = false;
    this.dataservice.updatedata.next(this.signedin);
  }

  onSearch(){
    console.log(this.listFilter);
    this.dataservice.searchdata.next(this.listFilter);
    this.service.searchProducts(this.listFilter).subscribe(() => this.router.navigateByUrl('/search'));
    // console.log(this.dataservice.searchdata);
  }
}
