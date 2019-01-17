import { Type } from '@angular/core';

export class WidgetModel {
  constructor(public component: Type<any>, public data: any) {}
}
