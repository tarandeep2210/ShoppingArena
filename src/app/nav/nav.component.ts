import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  signedin:boolean=false;
  constructor(private dataservice: DataService,private router:Router) { }

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
  }

  onclick() {
    this.signedin = false;
    this.dataservice.updatedata.next(this.signedin);
  }

  onSearch(){
    console.log(this.listFilter);
    this.dataservice.searchdata.next(this.listFilter);
    this.router.navigateByUrl('/search');
    // console.log(this.dataservice.searchdata);
  }
}
