import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  registeredNewCustomer:any;
  constructor() { }

  ngOnInit() {
  }

  registerCustomer(newGuy:any):void{
    this.registeredNewCustomer = newGuy;
    console.log(this.registeredNewCustomer);
    
  }

}
