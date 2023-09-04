export class Customer {
    [x:string]:any;
    constructor(
      public CustId:number,
      public CustName:string
    ){}
}


export const Customers:Array<Customer> = new Array<Customer>();

Customers.push(new Customer(1,'A'));
Customers.push(new Customer(2,'B'));
Customers.push(new Customer(3,'C'));
Customers.push(new Customer(4,'D'));
