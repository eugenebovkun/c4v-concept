import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {WidgetDirective} from '../widget.directive';
import {ComponentModel} from '../../services/component.model';
import {WidgetModel} from '../../services/widget.model';

@Component({
  selector: 'c4v-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss']
})
export class WidgetWrapperComponent implements OnInit {
  @Input() widget: WidgetModel;
  @ViewChild(WidgetDirective) widgetHost: WidgetDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.widget.component);

    let viewContainerRef = this.widgetHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<ComponentModel>componentRef.instance).index = this.widget.data.index;
  }
}
