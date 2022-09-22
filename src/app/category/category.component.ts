import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Cat, Sub } from './category.interface';
// import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent  {

  @Input() cat:Cat|null=null;
  @Output() edit=new EventEmitter<Cat>;
  newSub!:Sub;
  showInputSub=false;


  constructor() { }

  addSub(){
    this.showInputSub=false;
    if(this.cat){
      if(!this.cat.subs)this.cat.subs=[];
      this.cat.subs.push(this.newSub);
    }
  }

}
