import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  signedin:boolean=false;
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.updatedata.subscribe(
      (response: boolean) => this.signedin = response
    );
  }

  onclick() {
    this.signedin = false;
    this.dataservice.updatedata.next(this.signedin);
  }
}
