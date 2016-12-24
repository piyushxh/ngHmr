# NgHmr - Step 4

In this branch, "step4", we'll start to fix the problem of losing application state due to HMR.
We'll ultimately solve this problem with `Redux` (by way of the `ng2-redux` library) and a couple other related libraries,
such as `redux-localstorage`. Later, we'll bring in `ImmutableJS` and, since we're using TypeScript, `typed-immutable-record`.

Actually, the important concept here is not really Redux itself, but the ideas behind Redux. Rather than having our application
state spread about several components, we're going to keep it all in a single place - a single "store" in Redux parlance. The
store will be an immutable data structure. To update our application state, we'll define a reducer function that simply
takes the existing state and an _action_. It makes a copy of the existing state (because our state object must be immutable),
and mutates and returns that copy. Exactly _how_ that copy is mutated depends on the particular action being processed.

To make things a bit more interesting, we'll also explore the concepts of "presentational" and "container" components.
([see Dan Abramov's article](http://bit.ly/2hQ2WfZ)).

So in this branch, we turn CounterComponent into a pure "presentational" component. CounterComponent now represents a counter widget.
Each CounterComponent has a name, a current value, and controls to increment and decrement the counter's value. We also add a
CounterList component to act as a "container" for multiple CounterComponents.

The user can create several independent counters. As a presentational (aka "dumb") component, a CounterComponent is _given_ what it needs as inputs, such as the name and
current value of the "counter" it represents. CounterComponent also emits events (when the user clicks on the +/- buttons).
Thus, as a pure presentational component, CounterComponent does not maintain any application state internally. It simply
has inputs and outputs, and knows how to present it's particular chunk of application state to the user. Further, it delegates
event handling to it's parent container component.

When the user navigates to the `/counter` route, it is now the CounterListComponent that takes over (instead of CounterComponent).
CounterListComponent is a "container" component. If you look at it's constructor, you can see that it is injected with
the application state. It provides a simple form to add a new CounterComponent. The user simply enters a name and initial value for a new counter,
then clicks "Add Counter".


### Creating CounterComponents
The `CounterListComponent.addCounter()` method may be a bit counter-intuitive. It does not
simply create a new instance of CounterComponent and add it to some list. Instead, we view a "counter" as part of the
overall application state. So we _dispatch_ an _action_, which our Redux-based _reducer_ function ultimately handles. In
this case, we're adding a new "counter", with it's own name and current value, to the overall application state (i.e., the "store").
So how DO we actually instantiate a CounterComponent? Well, take a look at CounterListComponent's template. There is a
section there that simply iterates over a `counters$` property. The way that property is defined may seem odd: 

```
@select() counters$: Observable<Counter>
```

We're using the [`@select` decorator from ng2-redux](https://github.com/angular-redux/ng2-redux/blob/master/docs/select-pattern.md) to obtain an RxJS Observable which allows us to observe the `counters` state property. Anytime our `counters` state property changes, our CounterListComponent template is automatically updated. 

The template uses `*ngFor="let counter of counters$ | async"` to iterate over the counters and renders a CounterComponent for each. Notice that since CounterComponent is a purely presentational component, we can use
Angular's ChangeDetectionStrategy.OnPush, which is a much faster, more efficient strategy for reacting to state changes. [See
Victor Savkin's article for more info](http://bit.ly/2gCYSP6).

When the user increments or decrements a particular counter, the CounterComponent emits the appropriate event back to
CounterListComponent which then dispatches an appropriate action to Redux in order to update the application
state. Redux invokes our reducer function, which updates the app state appropriately. The `counters$` observable in CounterListComponent kicks in to trigger a UI update. 

One awesome benefit of all this rework becomes clear when you realize that our application's entire state is now represented
in a single object which can be serialized and deserialized easily. For example, we can convert it to a JSON string
and save it in localstorage, and read it back and parse it, and bang, we're right back where we started. That's precisely
what we do with the help of `redux-localstorage` and some tweaks to the Webpack HMR handling code. Now, when we're notified
that a module is about to be reloaded, we can save our current state down to local storage and then reload it after the updated
module has reloaded. It'll be like nothing ever happened. I think that's awesome. You should also play around with the Chrome dev tools
for Redux, which let you arbitrarily move back and forth across the various versions of your app state.

In step 5, we'll take things a bit further by leveraging ImmutableJS along with the `typed-immutable-record` library. This
combination is one way of ensuring that our application state is in fact immutable, while still benefiting from the
strong typing provided by Typescript.

## Setup
Run `npm install` or, if you use Yarn, just run `yarn`.

## Running
Run `yarn start` or `npm start`.
Then open your browser and go to `http://localhost:8080`.

