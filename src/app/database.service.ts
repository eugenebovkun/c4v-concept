import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import {PointModel} from './point.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private db;

  constructor() {
    this.initDatabase();
  }

  private initDatabase() {
    this.db = new Dexie('c4v');

    this.db.version(1).stores({
      points: '++id, longitude, latitude'
    });

    this.db.open().catch(function (e) {
      console.error("Open failed: " + e);
    });
  }

  public addPoint(p: PointModel) {
    this.db.points.add(p);
  }

  public getPoint(pointId: number): Promise<PointModel> {
    return this.db.points.get(pointId)
      .then((point: any) => {
        return point as PointModel;
      });
  }

  public getAllPoints():Promise<PointModel[]> {
    return this.db.points.toArray();
  }

  getTable(tableName: string) {
    return this.db[tableName];
  }

}
