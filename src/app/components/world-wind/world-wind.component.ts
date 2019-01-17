import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import * as WorldWind from '@nasaworldwind/worldwind';

@Component({
  selector: 'c4v-world-wind',
  templateUrl: './world-wind.component.html',
  styleUrls: ['./world-wind.component.scss']
})
export class WorldWindComponent implements AfterViewInit {

  constructor() {
  }

  @Input('index') index: number;
  @ViewChild('scene') scene: ElementRef;

  ngAfterViewInit() {
    // const wwd = WorldWind.WorldWindow(this.scene.nativeElement);
    // This will work with the next release of WebWorldWind, which supports an
    // actual element instead of the ID as a string.

    // In the meantime, the ID must be used and makes the component not easily
    // reusable.

    let id;
    if (this.index || this.index === 0) {
      id = `scene${this.index}`;
    } else {
      id = `scene`;
    }
    const wwd = new WorldWind.WorldWindow(id);

    wwd.addLayer(new WorldWind.BMNGOneImageLayer());
    wwd.addLayer(new WorldWind.BMNGLandsatLayer());

    wwd.addLayer(new WorldWind.CompassLayer());
    wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
    wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

    wwd.redraw();
  }

}
