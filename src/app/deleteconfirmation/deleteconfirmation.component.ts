import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-deleteconfirmation',
  templateUrl: './deleteconfirmation.component.html',
  styleUrls: ['./deleteconfirmation.component.css']
})
export class DeleteconfirmationComponent implements OnInit {
  @Input() item:string|undefined;
  @Input() name1:string|undefined;
  @Output() ondelete=new EventEmitter
  
  constructor() { }

  ngOnInit(): void {
  }
delete(){
  this.ondelete.emit(this.item)
  alert("deleting............. ")
}

cancel(){
  alert("cancel....")
  
}
}
