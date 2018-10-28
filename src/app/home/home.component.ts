import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Observable<any[]>;

  constructor(private route : ActivatedRoute) {

    this.route.data.subscribe(
      data => this.products = data['products']
    );
   }

  ngOnInit() {
    
  }

}
