import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  updatedata = new Subject();
  checkdata = new Subject();
  searchdata = new Subject();


}
