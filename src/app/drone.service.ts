import { Injectable } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class DroneService {
  private readonly urls = [
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d129452.21725885612!2d30.484766877066267!3d50.41223032921026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1541946543934',
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.512365066356!2d30.5225702661138!3d50.412924829470214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb8ecc0b59d8828b0!2z0J_QsNC70LDQtNGW0YPQvCDQodGW0YLRlg!5e0!3m2!1sru!2sua!4v1541947619985',
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.2101879303705!2d30.520276816114404!3d50.43718547947357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cefe0307e81f%3A0x1516b2536c30bd35!2z0JTQstC-0YDQtdGGINGB0L_QvtGA0YLQsA!5e0!3m2!1sru!2sua!4v1541947797156',
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.441339132565!2d30.51913087431135!3d50.43287955881845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf02b2b3a94f%3A0x783fe299564db0c2!2z0J3QodCaIMKr0J7Qu9C40LzQv9C40LnRgdC60LjQucK7!5e0!3m2!1sru!2sua!4v1541947837497'
  ];

  private readonly drones = [
    {id: '1', mapUrl: this.urls[0], altitude: 0, longitude: 0},
    {id: '2', mapUrl: this.urls[1], altitude: 0, longitude: 0},
    {id: '3', mapUrl: this.urls[2], altitude: 0, longitude: 0},
    {id: '4', mapUrl: this.urls[3], altitude: 0, longitude: 0},
  ];

  constructor(private domSanitizer: DomSanitizer) {
    this.drones.forEach((drone) => drone.mapUrl = (this.sanitizeMapIframe(drone.mapUrl) as any));
  }

  public getDrones(): Array<any> {
    return this.drones;
  }

  public getDrone(id: string) {
    return this.drones.find((drone) => drone.id == id);
  }

  private sanitizeMapIframe(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
