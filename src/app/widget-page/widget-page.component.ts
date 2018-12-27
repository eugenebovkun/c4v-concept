import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PagesDataService} from '../services/pages-data.service';
import {PageModel} from '../services/page.model';

@Component({
  selector: 'c4v-widget-page',
  templateUrl: './widget-page.component.html',
  styleUrls: ['./widget-page.component.scss']
})
export class WidgetPageComponent implements OnInit {

  pageId: number;
  page: PageModel;
  constructor( private route: ActivatedRoute, private pageService: PagesDataService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.pageId = params.id;
        this.getWidgets();
      });
  }

  private getWidgets() {
    this.pageService.pages$.subscribe((pages) => {
      console.log('pages loaded', pages);
      this.page = pages[0];
    })
  }
}
