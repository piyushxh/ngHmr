# NgHmr

This project demonstrates using Webpack's Hot Module Replacement feature with an Angular2 app, along with Redux and
Immutable JS, to ease development.

## Setup
Run `npm install` or, if you use Yarn, just run `yarn`.

## Running
Run `yarn start` or `npm start`

## Branch-specific notes
In this branch "step2", we have a small but important modification to `main.ts`:

```
if(module['hot']) {
  console.log("calling module.hot.accept()")
  module['hot'].accept();
}
```

This chunk of code uses the HMR API. First we check if HMR is enabled and, if it is, we call the `accept()` method
in order to load the modified modules. See the Webpack docs on HMR for details: https://webpack.github.io/docs/hot-module-replacement.html#accept

