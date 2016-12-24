# NgHmr - Step 3

In this branch, "step3", we add a few more components and wire up Angular Router to help with navigation.
We'll introduce a "counter" component that lets the user click '+' and '-' buttons to increment or decrement a
counter. The point of this step is to show that while we have HMR set up to reload our modified code, we're losing
the portion of application state that is held and maintained by the reloaded module(s). Suppose we click the '+' button
five times and then change the CounterComponent code. The CounterComponent will be reloaded, and our counter will be reset to 0.

This probably isn't the best way to handle state management. We don't want our state to be affected when we reload a module via HMR.
We don't want to have to click the '+' button five (or however many) times just to get back to where we were every time we make some code change. We'll start fixing this situation next, in step 4, by introducing Redux and a couple other associated libraries.

Follow these steps to see what I'm talking about: 

1. Run `npm install`
2. Run `npm start`
3. When Webpack is ready, open your browser and go to `http://localhost:8080`
4. Click the Counter button at the top to navigate to the "counter" component's content.
5. Click the '+' or '-' buttons to change the value of the counter to something other than 0. 
6. In code editor, open `src/app/counter/counter.component.ts`. Edit the template. For example, change the text "Here's a counter, isn't it cool?" to "Here's a counter, isn't it kewl?". While keeping an eye on the page in your browser, save your changes. 
7. Notice that the page was reloaded, and your counter's value was reset to 0. That sucks! But again, it is to be expected at this point. 


## Setup
Run `npm install` or, if you use Yarn, just run `yarn`.

## Running
Run `yarn start` or `npm start`.
Then open your browser and go to `http://localhost:8080`.

