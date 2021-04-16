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
  accn = "";
  pass = "";
  amount = "";
  uname = this.un.currentUser;
  depositform = this.dp.group({
    accn: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]*')]],
    pass: ['', [Validators.required, Validators.pattern('[a-zA-Z 0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  withdrawform = this.dp.group({
    accn: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]*')]],
    pass: ['', [Validators.required, Validators.pattern('[a-zA-Z 0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })
  name: any
  accno: any
  ldate:Date=new Date
  trans=["1000 debted ","200 credited" ,"500 upi transaction "]
  constructor(private dp: FormBuilder, public un: DataService) {
    this.name = localStorage.getItem("name")

  }

  ngOnInit(): void {
  }
  //------------------------------------------------------
  deposit() {
    if (this.depositform.valid) {


      this.un.deposit(this.depositform.value.accn, this.depositform.value.pass, this.depositform.value.amount).subscribe((result: any) => {
        if (result) {
          alert(result.message)
        }
      }, (result: any) => {
        alert(result.erorr.message)
      })
    }
  }
  //-------------------------------------------------------

  
//-------------------------------------------------------
  withdraw() {
    if (this.withdrawform.valid) {
      this.un.withdraw(this.withdrawform.value.accn, this.withdrawform.value.pass, this.withdrawform.value.amount).subscribe((result: any) => {
        alert(result.message)
      }, (result) => {
        alert(result.error.message)
      })
    }
  }
//---------------------------------------------------------------
//--------------
delete() {
  this.accno = localStorage.getItem('acno')
  this.name = localStorage.getItem("name")
}
//---------------

//-----------------
item($event:any){

alert($event)
}
//-----------------
}
