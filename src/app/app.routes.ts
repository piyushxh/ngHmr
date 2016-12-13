import { Routes } from '@angular/router';
import { WizardComponent } from './wizard';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import {DashboardComponent} from "./dash"


export const ROUTES: Routes = [
  { path: '',       component: DashboardComponent },
  { path: 'dash',   component: DashboardComponent },
  { path: 'wizard', component: WizardComponent },
  { path: 'about',  component: AboutComponent },
  { path: '**',     component: NoContentComponent },
];
