import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sub } from '../category/category.interface';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss']
})
export class SubComponent implements OnInit {
  @Input() sub!:Sub;
  beginInputNewAmount=false;
  newAmount="";

  constructor() { }

  ngOnInit(): void {
  }

  saveAmount(event:any){
    this.beginInputNewAmount=false;
    this.newAmount=(<HTMLInputElement>event.target).value;
  }
}
