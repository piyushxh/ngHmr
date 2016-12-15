import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  styles: [` 
    .content { margin: 40px; }
    .button-container { margin: 25px; }    
`],
  template: `
    <div class="content">
      <h1>Counter</h1>
      <div>
        Here's a counter. 
        <div>Value: {{value}}</div>
        
        <div class="button-container">
          <button (click)="increment()">+</button>
          <button (click)="decrement()">-</button>
        </div>
      </div>
    </div>
  `
})
export class CounterComponent {
  value = 0

   increment() {
     this.value++
   }

  decrement() {
    this.value--
  }
}
