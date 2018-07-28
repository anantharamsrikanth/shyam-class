import { Directive ,TemplateRef,ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[appCustoms]'
})
export class CustomsDirective {

  constructor(private temp:TemplateRef<any>,private container:ViewContainerRef) { }
  @Input() set method(consdition:boolean){
    if(consdition){
      this.container.createEmbeddedView(this.temp);
    }
    else{
      this.container.clear();
    }
  }

}
