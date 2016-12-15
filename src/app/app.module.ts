import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import {RouterModule, PreloadAllModules} from "@angular/router"
import {NoContentComponent} from "./no-content/no-content.component"
import {CounterComponent} from "./counter/counter.component"
import {DashboardComponent} from "./dash/dashboard.component"

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    DashboardComponent,
    NoContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
