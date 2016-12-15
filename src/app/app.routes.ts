import { Routes } from '@angular/router'
import { CounterComponent } from './counter'
import { NoContentComponent } from './no-content'
import {DashboardComponent} from "./dash"

export const ROUTES: Routes = [
  { path: '',         component: DashboardComponent },
  { path: 'dash',     component: DashboardComponent },
  { path: 'counter',  component: CounterComponent },
  { path: '**',       component: NoContentComponent },
]
