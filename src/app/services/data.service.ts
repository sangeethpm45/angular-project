import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
const options={
withCredentials:true
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient) { }

currentUser:any;


//function to store data in local storage---------------------------
// saveDetails(){
//   localStorage.setItem("accountdetails",JSON.stringify(this.accountdetails))
//   if(this.currentUser){
//     localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
//   }
// }
//----end----------------------------------------------------------------

//function to get data from local storage---------------------------------
// getDetails(){
//   if(localStorage.getItem('accountdetails')){
//     this.accountdetails=JSON.parse(localStorage.getItem("accountdetails")||'')
//   }
//   if(localStorage.getItem("currentUser")){
//     this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')

//   }
// }
//-------end--------------------------------------------------------------



//-----Register a new user-------------------------------

register(accno:any,name:any,password:any){
   const data={
    accno,
    name,
    balance:0,
    password
  }
return this.http.post(environment.Apiurl+"/register'",data)

}

//----------------------------------------------------------





// Login function-----------------------------------------

login(accn:any,passw:any){

const data={
  accn,
  password:passw
}
return this.http.post(environment.Apiurl+"/login",data,options)
 }
 
//---------------------------------------------------------------------


//---------------------------------------------------



//---funtion to deposit money----------------------------------------

deposit(accn:any,pwd:any,amd:any){
  var amt=parseInt(amd)
  const data={
    accn,
    pwd,
    amt
  }
  return this.http.post(environment.Apiurl+"/deposit",data,options)
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
  return this.http.post(environment.Apiurl+"/withdraw",data,options)
 }
 
//-----------------------------------------------------------------------
  




}
 