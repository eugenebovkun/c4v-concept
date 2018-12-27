import {Component, Input, OnInit} from '@angular/core';
import {PointModel} from '../point.model';
import {PointsService} from '../points.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss']
})
export class PointsComponent implements OnInit {
  @Input('points') points: PointModel[];

  constructor(private pointsService: PointsService) { }

  ngOnInit() {
  }

  moveRight(point: PointModel) {
    ++point.longitude;
    point.geometry = [point.longitude, point.latitude];
    this.pointsService.updatePoint(point);
  }

  moveLeft(point: PointModel) {
    --point.longitude;
    point.geometry = [point.longitude, point.latitude];
    this.pointsService.updatePoint(point);
  }

  moveUp(point: PointModel) {
    ++point.latitude;
    point.geometry = [point.longitude, point.latitude];
    this.pointsService.updatePoint(point);
  }

  moveDown(point: PointModel) {
    --point.latitude;
    point.geometry = [point.longitude, point.latitude];
    this.pointsService.updatePoint(point);
  }

}
