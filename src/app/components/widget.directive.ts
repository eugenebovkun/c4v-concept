import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[c4v-widget]'
})
export class WidgetDirective {


  constructor(public viewContainerRef: ViewContainerRef) { }
}
