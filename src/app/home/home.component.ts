import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Product } from '../product/product.model';
import { ProductService } from '../product/product.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Observable<Product[]> | undefined;
  spin: boolean=false;

  constructor(private route : ActivatedRoute , private service:ProductService,private dataservice:DataService) {

   
  }

    
  ngOnInit() {
    this.products= this.service.getProducts();
    // this.service.getProducts().subscribe(data =>{ this.products = data;console.log(data) } );
    console.log(this.products);
    
    // this.products.subscribe(() => this.spin=false);
    
    // this.dataservice.spin.subscribe(
    //   (response: boolean) => this.spin = response
    // );
    
   // this.products = this.route.snapshot.data['products'];
    //console.log(this.products);
    
    // this.route.data.subscribe(
    //   (data:Product) => { this.products = data['products']; }
    // );

    // this.route.data
    // .subscribe((data: { product: Product[] }) => {
    //   this.products = data.product;
      
    // });
   }

  }


