import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux'

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

    //only include the devTools enhancer if the ReduxDevTools extension is installed and enabled
    // (see  https://github.com/zalmoxisus/redux-devtools-extension
    //  and https://github.com/angular-redux/ng2-redux/blob/master/src/components/dev-tools.ts )
    const enhancersSuite = devTools.enhancer() ? [ ...enhancers, devTools.enhancer() ] : enhancers

    ngRedux.configureStore(
        rootReducer,
        INITIAL_STATE,
        middleware,
        enhancersSuite  // Normally you'd only want to use devTools.enhancer() in devMode.
    );
  }

}
