import { Directive ,ElementRef,Renderer} from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class AttributeDirective {

  constructor(private elemnt:ElementRef,render:Renderer) {
    render.setElementStyle(elemnt.nativeElement, "backgroundColor","red");
   }
   
}
