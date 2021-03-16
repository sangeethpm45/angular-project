import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   accountdetails = {
    1000: {
        accno: 1000,
        name: "userone",
        balence: 6000,
        password: "user1",
    }, 
    1001: {
        accno: 1001,
        name: "usertwo",
        balence: 9000,
        password: "user2",
    },
    1002: {
        accno: 1002,
        name: "userthree",
        balence: 6000,
        password: "user3",
    },
    1003: {
        accno: 1003,
        name: "userfour",
        balence: 9000,
        password: "user4",
    },
    1004: {
        accno: 1004,
        name: "userfive",
        balence: 6000,
        password: "user5",
    },
    1005: {
        accno: 1005,
        name: "usersix",
        balence: 9000,
        password: "user6",
    }
};
uname="Enter your username"
passw=""
aim="sangeeth"

  constructor() { }

  ngOnInit(): void {
  }
getusername(event:any){
    this.uname=event?.target.value;
}
getpassword(event:any){
    this.passw=event.target.value;
    console.log(this.passw);
    
    
}
login(){
  alert("login works")
  
}
}
