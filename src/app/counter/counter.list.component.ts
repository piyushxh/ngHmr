import { Component } from '@angular/core'
import { Counter } from '../store/state.types'
import { Observable } from 'rxjs'
import { select } from 'ng2-redux'
import { CounterActions } from '../store/counter.actions'

@Component({
    selector: 'counter-list',
    styles: [` 
        .content {
            margin: 40px; 
            background-color: #ececf6;
            padding:20px;
        }
        .counters-container { 
            margin: 25px; 
        }    
    `],
    template: `
    <div class="content">
      <h1>Counters</h1>
      <input type="text" name="counterName" #counterName /><button (click)="addCounter(counterName.value); counterName.value=''">Add Counter</button>

      <div class="counters-container">
        <div *ngFor="let counter of counters$ | async">
          <counter [counter]="counter" (increment)="increment($event)" (decrement)="decrement($event)"></counter>   
        </div>
      </div>
    </div>
  `
})
export class CounterListComponent {
    @select('counters') counters$: Observable<Counter>

    constructor(private counterActions: CounterActions) {
    }

    addCounter(counterName: string) {
        this.counterActions.create(counterName)
    }

    increment(counter:Counter) {
        this.counterActions.increment(counter)
    }

    decrement(counter:Counter) {
        this.counterActions.decrement(counter)
    }
}
