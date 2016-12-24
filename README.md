# NgHmr - Step 4

In this branch, "step4", we'll start to fix the problem of losing application state due to HMR.
We'll ultimately solve this problem with `Redux` (by way of the `ng2-redux` library) and a couple other related libraries,
such as `redux-localstorage`.
Actually, the important concept here is not really Redux itself, but the ideas behind Redux. Rather than having our application
state spread about several components, we're going to keep it all in a single "store". The
store must be treated as an immutable data structure. To update our application state, we'll define a reducer function that simply
takes the existing state and an _action_. It makes a _copy_ of the existing state (because our state object must be immutable),
and mutates and returns that copy. Exactly _how_ that copy is mutated depends on the particular action being processed.

To make things a bit more interesting, we'll also explore the concepts of "presentational" and "container" components.
([see Dan Abramov's article](http://bit.ly/2hQ2WfZ)).

So in this branch, we turn `CounterComponent` into a pure "presentational" component. `CounterComponent` now represents a counter widget.
Each `CounterComponent` has a reference to a `Counter` object, which has properties `id`, `name`, and `value`. The `CounterComponent` also has controls to increment and decrement the counter's value.

 We also add a
`CounterList` component to act as a "container" for multiple `CounterComponents`. The user can create several independent counters. As a presentational (aka "dumb") component, a `CounterComponent` is _given_ what it needs as inputs, such as the `Counter` object it is displaying. `CounterComponent` also emits events when the user clicks on the +/- buttons. These events will be handled by the `CounterList` container component.

As a pure presentational component, `CounterComponent` does not maintain any application state internally. It simply
has inputs and outputs, and knows how to present it's particular chunk of application state to the user. Further, it delegates
event handling to it's parent container component.

When the user navigates to the `/counter` route, it is now the `CounterListComponent` that takes over (instead of `CounterComponent` as in step3). If you look at the constructor for `CounterListComponent`, you can see that it is injected with
the application state. Also, it's template provides a simple form to add a new `Counter` to the application state. 

### Creating CounterComponents
The `CounterListComponent.addCounter()` method may be a bit counter-intuitive. It does not
simply create a new instance of `CounterComponent` and add it to some list. Instead, we view a "counter" as part of the
application state. So we _dispatch_ an _action_, which our Redux-based _reducer_ function ultimately handles. In
this case, we're adding a new "counter", with it's own name and current value, to the overall application state (i.e., the "store"). I've defined an interface named `AppState` that describes the shape our app's state tree (see `src/app/store/state.types.ts`). We just have a single property, `counters`, which is a list of `Counter` objects. 

When a new counter is added, the `CounterListComponent.addCounter()` method dispatches a "CREATE" action via `CounterActions.create()` to Redux. Redux then invokes our `rootReducer` function (in `src/app/store/store.ts`), which creates a new `Counter` object and adds it to our application state tree. This is basic Redux stuff - [see the Redux docs for more info about how that all works](http://redux.js.org/).

So how DO we actually instantiate a `CounterComponent`? Well, take a look at `CounterListComponent`'s template. There is a
section there that simply iterates over a `counters$` property. The way that property is defined may seem odd: 

```
@select() counters$: Observable<Counter>
```

We're using the [`@select` decorator from ng2-redux](https://github.com/angular-redux/ng2-redux/blob/master/docs/select-pattern.md) to obtain an RxJS Observable which allows us to observe the `counters` state property. Anytime our `counters` state property changes, our `CounterListComponent` template is automatically updated. 

The template uses `*ngFor="let counter of counters$ | async"` to iterate over the counters and renders a `CounterComponent` for each. Notice that since `CounterComponent` is a purely presentational component, we can use
Angular's `ChangeDetectionStrategy.OnPush`, which is a much faster, more efficient strategy for reacting to state changes. [See
Victor Savkin's article for more info](http://bit.ly/2gCYSP6).

When the user increments or decrements a particular counter, the `CounterComponent` emits the appropriate event back to
`CounterListComponent` which then dispatches an appropriate action to Redux in order to update the appropriate counter in our application
state. Redux invokes our reducer function, which updates the app state appropriately. The `counters$` observable in `CounterListComponent` kicks in to trigger a UI update. 

One awesome benefit of all this rework becomes clear when you realize that our application's entire state is now represented
in a single object which can be serialized and deserialized easily. For example, we can convert it to a JSON string
and save it in localstorage, read it back and parse it, and bang, we're right back where we started. That's precisely
what we do with the help of `redux-localstorage` and some tweaks to the Webpack HMR-handling code (you should compare this branch with the step3 branch to see what's been changed). Now, when we're notified
that a module is about to be reloaded, we can save our current state down to local storage and then reload it after the updated
module has reloaded. It'll be like nothing ever happened - our state is unaffected by changes to component code. I think that's awesome - it allows you to play around with a deeply nested presentational component (as you try to make it look just right, for example), without losing your place. That's a huge productivity booster. 

You should also play around with the [Redux dev tools](https://github.com/gaearon/redux-devtools), which let you arbitrarily move back and forth across the various versions of your app state.

This article is long enough, but I'd recommend that you look into using [ImmutableJS](http://facebook.github.io/immutable-js/) as well. It can sometimes be difficult to make sure you're never mutating the state object in your reducers. A library like ImmutableJS helps with that. However, it can be a bit awkward to use ImmutableJS with Typescript. I found the [typed-immutable-record](https://github.com/rangle/typed-immutable-record) library helpful. 

## Setup
Run `npm install` or, if you use Yarn, just run `yarn`.

## Running
Run `yarn start` or `npm start`.
Then open your browser and go to `http://localhost:8080`.

