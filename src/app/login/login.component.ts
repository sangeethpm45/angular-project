import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
accn="";
passw="";
aim="sangeeth";
//currentuser:any;
 
loginform=this.fb.group({
accn:['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
passw:['',[Validators.required,Validators.pattern('[a-zA-Z 0-9]*')]]

})

  constructor(private route:Router,private dataService:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
// getusername(event:any){
//     this.accn=event.target.value;
// }
// getpassword(event:any){
//     this.passw=event.target.value;
//     //console.log(this.passw);
    
    
// }
login(){
  if(this.loginform.valid){
  this.dataService.login(this.loginform.value.accn,this.loginform.value.passw).subscribe((result:any)=>{
  if(result){
    localStorage.setItem("name",result.name)
    localStorage.setItem("acno",result.acno)
    alert(result.message)
    this.route.navigateByUrl("home")
}
},(result)=>{
  alert(result.error.message)
  this.route.navigateByUrl('')
})
  }

}









}
