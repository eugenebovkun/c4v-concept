import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { WidgetDirective } from '../widget.directive';
import { ComponentModel } from '../../services/component.model';
import { WidgetModel } from '../../services/widget.model';
import { ResizableDirective, ResizeEvent } from 'angular-resizable-element';
import { PagesDataService } from '../../services/pages-data.service';

@Component({
  selector: 'c4v-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss']
})
export class WidgetWrapperComponent implements OnInit {
  @Input() widget: WidgetModel;
  @ViewChild(WidgetDirective) widgetHost: WidgetDirective;
  @ViewChild(ResizableDirective) resizableContainer: ResizableDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private widgetService: PagesDataService) {
  }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.widget.component);

    let viewContainerRef = this.widgetHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    // ToDo refactor model

    ((<ComponentModel>componentRef.instance) as any).index = this.widget.data.index;
  }

  onResizeEnd(event: ResizeEvent): void {
    const newWidth = `${event.rectangle.width}px`;
    // const newHeight = `${event.rectangle.height}px`;
    this.resizableContainer.elm.nativeElement.style.width = newWidth;
    // this.resizableContainer.elm.nativeElement.style.height = newHeight;
  }

  moveToAnotherScreen() {
    this.widgetService.moveToAnotherScreen(this.widget);
  }


  closeWidget() {
    this.widgetService.closeWidget(this.widget);
  }
}
