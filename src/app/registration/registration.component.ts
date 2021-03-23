import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
uname="";
accno="";
pssw="";


registerform=this.fb.group({
uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
accno:['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
pssw:['',[Validators.required,Validators.pattern('[a-zA-Z 0-9]*')]]

})
  constructor(private dataservice:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
register(){
  
  if (this.registerform.valid){   
    var result=this.dataservice.register(this.registerform.value.accno,this.registerform.value.uname,this.registerform.value.pssw)
    alert("registration sucess")
    if(result){
      this.router.navigateByUrl("")
    }
    else{
      alert("not ")
    }
  }
}
}
