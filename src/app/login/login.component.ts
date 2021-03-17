import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
accn=""
passw=""
aim="sangeeth";

  constructor(private dinkan:Router) { }

  ngOnInit(): void {
  }
getusername(event:any){
    this.accn=event.target.value;
}
getpassword(event:any){
    this.passw=event.target.value;
    //console.log(this.passw);
    
    
}
login(){
  
    var acn = this.accn
    var psswrd =this.passw
    let dataset=this.accountdetails;
    //let data = Bank.getAccountdetails();
    if (acn in dataset) {
        if (psswrd == dataset[acn]["password"]) {
            alert("Login Sucess")
            this.dinkan.navigateByUrl("home")
            
        } else {
            alert("inavlid");
        }
    } else {
        alert("no user");
    }

}
}
