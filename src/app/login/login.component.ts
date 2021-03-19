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
// aim="sangeeth";
 
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
    
    var acn = this.loginform.value.accn    
    var psswrd =this.loginform.value.passw
    let dataset=this.dataService.accountdetails;
    //let data = Bank.getAccountdetails();
    if (acn in dataset) {
        if (psswrd == dataset[acn]["password"]) {
            alert("Login Sucess")
            this.route.navigateByUrl("home")
            
        } else {
            alert("inavlid");
        }
    } else {
        alert("no user");
    }

}
}
