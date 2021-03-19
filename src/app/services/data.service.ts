import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountdetails:any = {
    1000: {
        accno: 1000,
        name: "userone",
        balance: 6000,
        password: "user1",
    }, 
    1001: {
        accno: 1001,
        name: "usertwo",
        balance: 9000,
        password: "user2",
    },
    1002: {
        accno: 1002,
        name: "userthree",
        balance: 6000,
        password: "user3",
    },
    1003: {
        accno: 1003,
        name: "userfour",
        balance: 9000,
        password: "user4",
    },
    1004: {
        accno: 1004,
        name: "userfive",
        balance: 6000,
        password: "user5",
    },
    1005: {
        accno: 1005,
        name: "usersix",
        balance: 9000,
        password: "user6",
    }
};
register(accno:any,name:any,password:any){
if (accno in this.accountdetails){
  alert("user exist")
  return false
}
else{
  this.accountdetails[accno]={
    accno,
    name,
    balance:0,
    password
  }
  alert("sucess");
  console.log(this.accountdetails);
  return true
  
}
}
  constructor() { }
}
