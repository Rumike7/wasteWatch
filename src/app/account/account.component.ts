import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../category/category.interface';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  @Input() account:Account|null=null;

  constructor() { }

  ngOnInit(): void {
  }

}
