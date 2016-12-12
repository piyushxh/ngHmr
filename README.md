# NgHmr - Step 1

In this branch "step1", we have a very basic Angular 2 app and a fairly simple Webpack config.
Follow these steps:
1. Run the app with `yarn start` or `npm start`.
2. Load the app in your browser and open the dev console.
3. Open `app.component.ts` in your editor and change the `title` to whatever you want. Save your changes.
4. Notice that your changes do not automatically appear. You have to refresh your browser. Bummer!
   Don't worry, that's supposed to happen. We're going to fix that...
   Also note that we _are_ using HMR. Actually, here's the definition of the `start` script:

   ```
   "start": "yarn run server:dev:hmr",
   "server:dev:hmr": "yarn run server:dev -- --inline --hot",
   "server:dev": "webpack-dev-server --config config/webpack.dev.js --progress --profile --watch --content-base src/",
   ```

   If you're not familiar with what's happening here, I'm simply chaining npm scripts:
   `start` is a shortcut for `yarn run server:dev:hmr`, which itself invokes `server:dev` and passes some extra arguments (`--inline --hot`).
   Thus `yarn start` here is equivalent to `webpack-dev-server --config config/webpack.dev.js --progress --profile --watch --content-base src/ --inline --hot`

   The `--hot` flag is what enables HMR. You can see in the console out put that _something_ related to HMR is happeneing. But we have
   to add some code in order to achieve the desired affect. Check out the branch `step2`.

## Setup
Run `npm install` or, if you use Yarn, just run `yarn`.

## Running
Run `yarn start` or `npm start`

