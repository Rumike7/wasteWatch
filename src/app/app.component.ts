import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Account, Cat, Sub } from './category/category.interface';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'wasteWatch';
  newCategory="";
  cats!:Cat[];
  newAccount="";
  accounts:Account[]=[];


  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
    this.getCategories();
  }


  saveAmount(event:any,sub:Sub,cat:Cat){
    sub.beginInputNewAmount=false;
    const newCategory:Cat={...cat};
    const newAmount=(<HTMLInputElement>event.target).value;
    const indSub=newCategory.subs.indexOf(sub);
    if(indSub!==-1){
      sub.sum+=+newAmount;
      newCategory.subs[indSub]=sub;
    }
    this.putCategory(cat,newCategory);
    this.sumOfCat(cat);
  }



  sumOfCat(cat:Cat){
    var subs:Sub={
      "title":"cat.title",
      "sum":0,
      "final":0,
      "beginInputNewAmount":false,
      "newAmount":"0",
   };
    if(cat.subs) subs=cat.subs.reduce(
      function(previous,current){return {
          "title":"cat.title",
          "sum":previous.sum+current.sum,
          "final":previous.final+current.final,
          "beginInputNewAmount":false,
          "newAmount":"0",
       }
     }
    );
    // console.table(subs);
    cat.sum=subs.sum;
    cat.final=subs.final;
  }

  addCategory(newCategoryTitle:string){
    if(newCategoryTitle!=''){
      const category:Cat={
        "title":newCategoryTitle,
        "sum":0,
        "final":0,
        "subs":[]
      }
      let body = JSON.stringify({ category });
      let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
      this.http.post('/api/category',body,options ).subscribe(
        data=>{this.getCategories()}
      );
    }
  }
  addSubCategory(event:any,category:Cat){
    category.addSub=false;
    const newSubTitle=(<HTMLInputElement>event.target).value;
    if(newSubTitle!=''){
      const sub:Sub={
        "title":newSubTitle,
        "sum":0,
        "final":0,
      }
      const newCategory:Cat={...category};
      newCategory.subs=newCategory.subs.concat(sub);
      this.putCategory(category,newCategory);
    }
  }

  putCategory(category:Cat,newCategory:Cat){
    let body = JSON.stringify({ category,newCategory });
    console.log(body);
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    this.http.put('/api/category',body,options ).subscribe(data=>{
          this.getCategories();
        }
    );
  }

  getCategories(){
    console.log("getCategories")
    this.http.get<Cat[]>('/api/category')
    .subscribe(cats => {
     console.log({"cats":cats});this.cats=cats;this.cats.map(this.sumOfCat);
   });

  }
}
