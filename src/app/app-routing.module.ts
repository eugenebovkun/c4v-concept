import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapsDashboardComponent} from './maps-dashboard/maps-dashboard.component';
import {DroneComponent} from './drone/drone.component';

const routes: Routes = [
  { path: 'dashboard', component: MapsDashboardComponent },
  { path: 'drone/:id', component: DroneComponent },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
