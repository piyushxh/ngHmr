# NgHmr - Step 3

In this branch, "step3", we add a few more components and wire up Angular Router to help with navigation.
We'll introduce a sort of "wizard", where the user has to proceed sequentially from one screen to the next.
You have no doubt endured forms like this. The point of this step is to show that HMR can help us work on the
2nd or 3rd screen of the "wizard" form without having to start all over again with every change. Except we're
not handling state management very well. In this branch, we're let each component "own" or manage it's own
chunk of application state. Unfortunately, this means that when a component is changed, and the old code is
therefore swapped out with the new code, we loose that data.

## Setup
Run `npm install` or, if you use Yarn, just run `yarn`.

## Running
Run `yarn start` or `npm start`

