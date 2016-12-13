import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import {RouterModule, PreloadAllModules} from "@angular/router"
import {NoContentComponent} from "./no-content/no-content.component"
import {AboutComponent} from "./about/about.component"
import {WizardComponent} from "./wizard/wizard.component"
import {DashboardComponent} from "./dash/dashboard.component"

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    AboutComponent,
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
