import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
// import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
accn="";
pass="";
amount="";
uname=this.un.currentUser;
depositform=this.dp.group({
  accn:['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
  pass:['',[Validators.required,Validators.pattern('[a-zA-Z 0-9]*')]],
  amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
})

withdrawform=this.dp.group({
  accn:['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
  pass:['',[Validators.required,Validators.pattern('[a-zA-Z 0-9]*')]],
  amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
})
  constructor( private dp:FormBuilder,public un:DataService) { }

  ngOnInit(): void {
  }
deposit(){
  this.un.deposit(this.depositform.value.accn,this.depositform.value.pass,this.depositform.value.amount)
}

withdraw(){
  this.un.withdraw(this.withdrawform.value.accn,this.withdrawform.value.pass,this.withdrawform.value.amount)
}
}
