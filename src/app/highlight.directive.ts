import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private ell:ElementRef) { 
    console.log(ell);
    ell.nativeElement.style.backgroundColor='red'
    
  }

}
