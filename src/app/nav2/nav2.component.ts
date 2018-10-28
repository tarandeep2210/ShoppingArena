import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../product/product.service';


@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.css']
})
export class Nav2Component implements OnInit {

  electronics: Observable<any[]>;
  constructor(private service : ProductService) {
    this.electronics = this.service.getCategoryProducts('electronics');

   }
 


  ngOnInit() {
  }

}
