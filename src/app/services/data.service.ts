import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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
currentUser:any;
//function to store data in local storage
saveDetails(){
  localStorage.setItem("accountdetails",JSON.stringify(this.accountdetails))
  if(this.currentUser){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
  }
}
//----end--------

//function to get data from local storage
getDetails(){
  if(localStorage.getItem('accountdetails')){
    this.accountdetails=JSON.parse(localStorage.getItem("accountdetails")||'')
  }
  if(localStorage.getItem("currentUser")){
    this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')

  }
}
//-------end----

register(accno:any,name:any,password:any){
if (accno in this.accountdetails){
  alert("user exist please login")
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
  this.saveDetails()
  console.log(this.accountdetails);
  return true
}
}


login(accn:any,passw:any){
  if (accn in this.accountdetails) {
    if (passw == this.accountdetails[accn]["password"]) {
        alert("Login Sucess")
      this.currentUser=this.accountdetails[accn]['name']

      this.saveDetails()
        return true
        
    } else {
        alert("inavlid");
        return false
    }
} else {
    alert("no user");
    return false
}
 }

deposit(accn:any,pwd:any,amt:any){
  var amd=parseInt(amt)
  this.getDetails()
  if (accn in this.accountdetails) {
    var usr=this.accountdetails[accn]["name"]
    if (pwd == this.accountdetails[accn]["password"]&&usr==this.currentUser) {
        
      this.accountdetails[accn]['balance']+=amd
      alert("amount credited successfully new balance"+this.accountdetails[accn]['balance'])  
        this.saveDetails()
    } else {
        alert("inavlid");
        
    }
} else {
    alert("no user");
    
}
}

withdraw(accn:any,pass:any,amt:any){
  var amd=parseInt(amt)
  var usr=this.accountdetails[accn]["name"]
  this.getDetails()
  if (accn in this.accountdetails) {
    if (pass == this.accountdetails[accn]["password"]&&usr==this.currentUser) {
        if(amt>this.accountdetails[accn]["balance"]){
          alert("insufficient balence")
        }
        else{
          this.accountdetails[accn]['balance']-=amd
          alert("amount credited successfully new balance :"+this.accountdetails[accn]['balance'])
          this.saveDetails()  
        }
      
        
    } else {
        alert("invalid");
        
    }
} else {
    alert("no user");
    
}
}

  constructor() { this.getDetails()}
}
