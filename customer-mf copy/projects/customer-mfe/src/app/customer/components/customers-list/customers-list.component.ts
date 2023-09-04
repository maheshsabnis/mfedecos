import { Component, OnInit } from '@angular/core';

import { Customer,Customers } from 'projects/customer-mfe/src/models/customers';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
   cust:Customer;
   customers = Customers;
   columns:Array<string>;

   constructor(){
    this.cust = new Customer(0,'');
    this.columns = new Array<string>();
   }

   ngOnInit(): void {
       this.columns = Object.keys(this.cust);
   }
}
