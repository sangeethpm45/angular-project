import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
const options={
withCredentials:true
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient) { }
//   accountdetails:any = {
//     1000: {
//         accno: 1000,
//         name: "userone",
//         balance: 6000,
//         password: "user1",
//     }, 
//     1001: {
//         accno: 1001,
//         name: "usertwo",
//         balance: 9000,
//         password: "user2",
//     },
//     1002: {
//         accno: 1002,
//         name: "userthree",
//         balance: 6000,
//         password: "user3",
//     },
//     1003: {
//         accno: 1003,
//         name: "userfour",
//         balance: 9000,
//         password: "user4",
//     },
//     1004: {
//         accno: 1004,
//         name: "userfive",
//         balance: 6000,
//         password: "user5",
//     },
//     1005: {
//         accno: 1005,
//         name: "usersix",
//         balance: 9000,
//         password: "user6",
//     }
// };
currentUser:any;
//function to store data in local storage
// saveDetails(){
//   localStorage.setItem("accountdetails",JSON.stringify(this.accountdetails))
//   if(this.currentUser){
//     localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
//   }
// }
//----end--------

//function to get data from local storage
// getDetails(){
//   if(localStorage.getItem('accountdetails')){
//     this.accountdetails=JSON.parse(localStorage.getItem("accountdetails")||'')
//   }
//   if(localStorage.getItem("currentUser")){
//     this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')

//   }
// }
//-------end----



//-----Register a new user
register(accno:any,name:any,password:any){
   const data={
    accno,
    name,
    balance:0,
    password
  }
return this.http.post('http://localhost:3000/register',data)

}
//--------------------------





// Login function-----------------------------------------

login(accn:any,passw:any){
//   if (accn in this.accountdetails) {
//     if (passw == this.accountdetails[accn]["password"]) {
//         alert("Login Sucess")
//       this.currentUser=this.accountdetails[accn]['name']

//       this.saveDetails()
//         return true
        
//     } else {
//         alert("inavlid");
//         return false
//     }
// } else {
//     alert("no user");
//     return false
// }
const data={
  accn,
  password:passw
}
return this.http.post("http://localhost:3000/login",data,options)
 }
 
//---------------------------------------------------



//---funtion to deposit money

deposit(accn:any,pwd:any,amd:any){
  var amt=parseInt(amd)
  const data={
    accn,
    pwd,
    amt
  }
  return this.http.post("http://localhost:3000/deposit",data,options)

//   this.getDetails()
//   if (accn in this.accountdetails) {
//     var usr=this.accountdetails[accn]["name"]
//     if (pwd == this.accountdetails[accn]["password"]&&usr==this.currentUser) {
        
//       this.accountdetails[accn]['balance']+=amd
//       alert("amount credited successfully new balance"+this.accountdetails[accn]['balance'])  
//         this.saveDetails()
//     } else {
//         alert("inavlid");
        
//     }
// } else {
//     alert("no user");
    
// }
}

//-----------------------------------------------------------


//----funtion to withdraw money-------------------------------------------

withdraw(accn:any,pass:any,amd:any){
  var amt=parseInt(amd)
  const data={
    accn,
    pwd:pass,
    amt
  }
  return this.http.post("http://localhost:3000/withdraw",data,options)
 }
//-----------------------------------------------------------------------
  
}
 