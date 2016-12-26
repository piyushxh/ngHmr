import {Component} from '@angular/core'

@Component({
    selector: 'dashboard',
    styles: [`
        .content { background-color: burlywood; }
`],
    template: `
    <div class="content">
    <h1>Dashboard</h1>
    <p>
      This is the Home / Dashboard page
    </p>
    </div>
  `
})
export class DashboardComponent {

}
