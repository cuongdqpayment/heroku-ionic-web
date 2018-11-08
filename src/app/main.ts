import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

//cho phep mode phat trien
import {enableProdMode} from '@angular/core';
enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
