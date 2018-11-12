import {Component, Sanitizer} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-maps-dasboard',
  templateUrl: './maps-dashboard.component.html',
  styleUrls: ['./maps-dashboard.component.scss'],
})
export class MapsDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1, url: this.sanitizeMapIframe(this.urls[0]), droneId: '1'},
          { title: 'Card 2', cols: 1, rows: 1, url: this.sanitizeMapIframe(this.urls[1]), droneId: '2'},
          { title: 'Card 3', cols: 1, rows: 1 , url: this.sanitizeMapIframe(this.urls[2]), droneId: '3'},
          { title: 'Card 4', cols: 1, rows: 1 , url: this.sanitizeMapIframe(this.urls[3]), droneId: '4'},
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1, url: this.sanitizeMapIframe(this.urls[0]), droneId: '1'},
        { title: 'Card 2', cols: 1, rows: 1, url: this.sanitizeMapIframe(this.urls[1]), droneId: '2'},
        { title: 'Card 3', cols: 1, rows: 2 , url: this.sanitizeMapIframe(this.urls[2]), droneId: '3'},
        { title: 'Card 4', cols: 1, rows: 1, url: this.sanitizeMapIframe(this.urls[3]), droneId: '4'},
      ];
    })
  );

  urls = [
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d129452.21725885612!2d30.484766877066267!3d50.41223032921026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1541946543934',
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.512365066356!2d30.5225702661138!3d50.412924829470214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb8ecc0b59d8828b0!2z0J_QsNC70LDQtNGW0YPQvCDQodGW0YLRlg!5e0!3m2!1sru!2sua!4v1541947619985',
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.2101879303705!2d30.520276816114404!3d50.43718547947357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cefe0307e81f%3A0x1516b2536c30bd35!2z0JTQstC-0YDQtdGGINGB0L_QvtGA0YLQsA!5e0!3m2!1sru!2sua!4v1541947797156',
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.441339132565!2d30.51913087431135!3d50.43287955881845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf02b2b3a94f%3A0x783fe299564db0c2!2z0J3QodCaIMKr0J7Qu9C40LzQv9C40LnRgdC60LjQucK7!5e0!3m2!1sru!2sua!4v1541947837497'
  ]

  constructor(private breakpointObserver: BreakpointObserver,
              private domSanitizer: DomSanitizer) {}

  private sanitizeMapIframe(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
