import {Component, EventEmitter, Output} from '@angular/core';
import {Counter} from "../store/state.types"
import {Input} from "@angular/core/src/metadata/directives"

@Component({
    selector: 'counter',
    styles: [` 
        .counter-content { 
            margin: 10px; 
            display: inline-block;
            padding: 15px;
            border: 1px solid #452367;
            border-radius: 6px;
            background-color: #f6f0de;
        }
        .counter-name {
            min-width: 200px;
            display:inline-block;
        }
        .button-container { 
            margin-left: 25px; 
            display: inline;            
         }    
    `],
    template: `
    <div class="counter-content">
        <span class="counter-name">{{counter.name}}: {{counter.value}}</span>          
        <div class="button-container">
          <button (click)="increment.emit(counter)">+</button>
          <button (click)="decrement.emit(counter)">-</button>
        </div>
    </div>
  `
})
export class CounterComponent {
    @Input() counter: Counter
    @Output() increment: EventEmitter<Counter> = new EventEmitter<Counter>()
    @Output() decrement: EventEmitter<Counter> = new EventEmitter<Counter>()
}
