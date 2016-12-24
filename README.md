# NgHmr - Step 2

In this branch, "step2", we have a small but important modification to `main.ts`:

```
if(module['hot']) {
  console.log("calling module.hot.accept()")
  module['hot'].accept();
}
```

This chunk of code uses the HMR API. First we check if HMR is enabled and, if it is, we call the `accept()` method
in order to load the modified modules. [See the Webpack docs on HMR for details](https://webpack.github.io/docs/hot-module-replacement.html#accept).

To test this out, fire up the app and point your browser to `http://localhost:8080` again.
Open up `app.component.ts` in your editor, and change the `title` property of `AppComponent`. Save your changes and
watch them appear in the browser automatically. Awesome!

This is a great step in the right direction, but this app is still way to simple to be interesting. What we really want
is to show how you can navigate around a more complex app, make changes to the component you're looking at (or one of it's downstream dependencies)
and have those changes appear automatically without losing your place in the app or your data (your 'state'). We don't want to have to repeat ourselves, firing a specific
sequence of actions on the UI every time we make a change. In Step 3, we'll add routing and an intentionally sub-optimal approach to state management.

## Setup
Run `npm install` or, if you use Yarn, just run `yarn`.

## Running
Run `yarn start` or `npm start`.
Then open your browser and go to `http://localhost:8080`.

## Next: Step 3
Stop the webpack-dev-server first, and then checkout the `step3` branch with
`git checkout step3`

