import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animationdemo',
  templateUrl: './animationdemo.component.html',
  styleUrls: ['./animationdemo.component.css'],
  animations:[
    trigger('openClose',[
      state('open',style({
        width:'300px',
        backgroundColor:'red'

      })),state('closed',style({
        width:'100px',
        backgroundColor:'green'
      })),
      transition('open=>closed',[
        animate('1s')
      ]),
      transition('closed=>open',[
        animate('1s')
      ])
    ])
  ]
})
export class AnimationdemoComponent implements OnInit {

  constructor() { }
 isOpen=true
  ngOnInit(): void {
  }
toggle(){
  this.isOpen=!this.isOpen
}
}
