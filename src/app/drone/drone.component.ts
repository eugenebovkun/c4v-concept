import {Component, Input, OnInit} from '@angular/core';
import {DroneService} from '../drone.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-drone',
  templateUrl: './drone.component.html',
  styleUrls: ['./drone.component.scss']
})
export class DroneComponent implements OnInit {

  public drone;
  @Input() data: any;
  private droneId: string;
  constructor(private droneService: DroneService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    if (!this.data) {
      this.route.params
        .subscribe((params) => {
          this.droneId = params.id;
          this.getDroneDetails();
        });
    } else {
      this.droneId = this.data.droneId;
    }
  }

  getDroneDetails() {
    this.drone = this.droneService.getDrone(this.droneId)
  }

}
