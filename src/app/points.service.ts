import { Injectable } from '@angular/core';
import {DatabaseService} from './database.service';
import {BehaviorSubject, interval, Subject} from 'rxjs';
import {PointModel} from './point.model';

@Injectable({
  providedIn: 'root'
})
export class PointsService {
  public points: Subject<any>;
  private pointsTable;
  private numberOfPoints = 0;
  private pollingInterval;
  private lastUpdate = 0;

  constructor(private databaseService: DatabaseService) {
    this.points = new Subject();
    this.points.next([]);
    this.pointsTable = this.databaseService.getTable('points');
    this.getPointsFromDatabase();
    this.subscribeToPointsUpdate();
    this.longPolling();
    this.lastUpdate = Date.now();
  }

  private getPointsFromDatabase() {
    this.databaseService.getAllPoints()
      .then((points: PointModel[]) => {
        this.numberOfPoints = points.length;
        this.points.next(points);
      });
  }

  private subscribeToPointsUpdate() {
    if (this.pointsTable) {
      this.pointsTable.hook('updating', (modifications, primKey, obj, transaction) => {
        console.log('point has been updated', obj);
        this.getPointsFromDatabase();
      });

      this.pointsTable.hook('creating', (primKey, obj, transaction) => {
        console.log('point has been created', obj);
        this.getPointsFromDatabase();
      });
    }
  }

  private createPoint(n: number) {
    const point = new PointModel();
    point.name = `point # ${n}`;
    point.geometry = [n, n];
    point.longitude = n;
    point.latitude = n;

    return point;
  }

  public addNewPoint() {

    const newPoint = this.createPoint(this.numberOfPoints);
    this.databaseService.addPoint(newPoint);
  }

  updatePoint(point: PointModel) {
    point.updatedTime = Date.now();
    this.pointsTable.put(point).then((updated) => {
      console.log('point update', updated);
    })
  }

  longPolling() {
    this.pollingInterval = setInterval(() => {
      this.getPointsFromDatabase();
    }, 2000);
  }

  updateBackend() {
    this.databaseService.getAllPoints()
      .then((points: PointModel[]) => {
        const pointsToUpdate = points.filter((point) => {
          return point.updatedTime > this.lastUpdate;
        });
        this.lastUpdate = Date.now();
        console.warn('push points to backend', pointsToUpdate)
      });

  }

}
