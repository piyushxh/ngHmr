import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/';

export function main() {
  return platformBrowserDynamic().bootstrapModule(AppModule);
}

if (document.readyState === 'complete') {
  main();
}
else {
  document.addEventListener('DOMContentLoaded', main);
}

if(module['hot']) {
  console.log("calling module.hot.accept()")
  module['hot'].accept();
}
