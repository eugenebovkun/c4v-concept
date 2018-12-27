import { Injectable } from '@angular/core';
import {PageModel} from './page.model';
import {BehaviorSubject} from 'rxjs';
import {ComponentModel} from './component.model';
import {WidgetModel} from './widget.model';
import {WorldWindComponent} from '../components/world-wind/world-wind.component';
import {DroneComponent} from '../drone/drone.component';

@Injectable({
  providedIn: 'root'
})
export class PagesDataService {

  private pages: PageModel[] = [];
  public pages$: BehaviorSubject<PageModel[]> = new BehaviorSubject<PageModel[]>(this.pages);

  constructor() {
    this.mockPages();
  }

  private mockPages() {
    const wWWidget1: WidgetModel = new WidgetModel(WorldWindComponent, {index: 1});
    const wWWidget2: WidgetModel = new WidgetModel(DroneComponent, {droneId: 1});
    const wWWidget3: WidgetModel = new WidgetModel(WorldWindComponent, {index: 3});
    const wWWidget4: WidgetModel = new WidgetModel(WorldWindComponent, {index: 4});

    const page1: PageModel = {
      id: 1,
      components: [wWWidget1, wWWidget4, wWWidget2]
    };

    this.pages.push(page1);
    console.log('update pages', this.pages);
    this.pages$.next(this.pages);
  }
}
