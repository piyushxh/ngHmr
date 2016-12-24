import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux';

import {ROUTES} from './app.routes';
import {AppComponent} from './app.component';
import {RouterModule, PreloadAllModules} from "@angular/router"
import {NoContentComponent} from "./no-content/no-content.component"
import {CounterComponent} from "./counter/counter.component"
import {DashboardComponent} from "./dash/dashboard.component"
import {AppState, INITIAL_STATE} from "./store/state.types"
import {rootReducer} from "./store/store"
import {middleware, enhancers} from "./store/state.helpers"
import {CounterListComponent} from "./counter/counter.list.component"
import {CounterActions} from "./store/counter.actions"

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterListComponent,
    DashboardComponent,
    NoContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    NgReduxModule.forRoot()
  ],
  providers: [
    CounterActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private ngRedux: NgRedux<AppState>,
              private devTools: DevToolsExtension) {
    ngRedux.configureStore(
        rootReducer,
        INITIAL_STATE,
        middleware,
        [ ...enhancers, devTools.enhancer() ]  // Normally you'd only want to use devTools.enhancer() in devMode.
    );
  }

}
