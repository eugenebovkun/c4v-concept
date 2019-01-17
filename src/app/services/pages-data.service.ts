import { Injectable } from '@angular/core';
import {PageModel} from './page.model';
import {BehaviorSubject} from 'rxjs';
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
      components: [wWWidget1, wWWidget2, wWWidget3, wWWidget4]
    };

    this.pages.push(page1);
    console.log('update pages', this.pages);
    this.pages$.next(this.pages);
  }

  closeWidget(widgetToDelete: WidgetModel) {
    this.pages.forEach((page: PageModel) => {
      const updatedComponents = page.components.filter((widget: WidgetModel) => widget !== widgetToDelete);
      if (updatedComponents.length !== page.components.length) {
        page.components = updatedComponents;
      }
    });
    this.pages$.next(this.pages);
  }

  moveToAnotherScreen(widgetToMove: WidgetModel) {
    alert('show modal to move to another screen');
  }
}
