<<<<<<< HEAD
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
=======
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';



if (environment.production) {
  enableProdMode();

}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
function bootstrap(arg0: any) {
  throw new Error('Function not implemented.');
}

>>>>>>> b67066c359c0da758243db92d1df366b25ff6bfb
