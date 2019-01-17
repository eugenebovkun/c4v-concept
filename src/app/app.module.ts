import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapsDashboardComponent } from './maps-dashboard/maps-dashboard.component';
import {MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatButtonToggleModule} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { DroneComponent } from './drone/drone.component';
import { PointsComponent } from './points/points.component';
import { WorldWindComponent } from './components/world-wind/world-wind.component';
import { WidgetDirective } from './components/widget.directive';
import { WidgetWrapperComponent } from './components/widget-wrapper/widget-wrapper.component';
import { WidgetPageComponent } from './widget-page/widget-page.component';
import {ResizableModule} from 'angular-resizable-element';

@NgModule({
  declarations: [
    AppComponent,
    MapsDashboardComponent,
    DroneComponent,
    PointsComponent,
    WorldWindComponent,
    WidgetDirective,
    WidgetWrapperComponent,
    WidgetPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    ResizableModule,
    MatNativeDateModule,
    LayoutModule
  ],
  entryComponents: [
    WorldWindComponent,
    WidgetWrapperComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
