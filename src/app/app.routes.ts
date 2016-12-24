import { Routes } from '@angular/router'
import { NoContentComponent } from './no-content'
import { DashboardComponent} from "./dash"
import { CounterListComponent} from "./counter/counter.list.component"

export const ROUTES: Routes = [
  { path: '',         component: DashboardComponent },
  { path: 'dash',     component: DashboardComponent },
  { path: 'counters', component: CounterListComponent },
  { path: '**',       component: NoContentComponent },
]
