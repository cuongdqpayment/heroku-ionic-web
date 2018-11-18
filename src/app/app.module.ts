import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { UploadPage } from '../pages/upload/upload';
import { ChatPage } from '../pages/chat/chat';
import { WebbrowserPage } from '../pages/webbrowser/webbrowser';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../providers/apiService';

@NgModule({
 declarations: [
   MyApp,
   HomePage,
   NewsPage,
   SignupPage,
   LoginPage,
   UploadPage,
   ChatPage,
   WebbrowserPage
 ],
 imports: [
   BrowserModule,
   IonicModule.forRoot(MyApp),
   HttpClientModule
 ],
 bootstrap: [IonicApp],
 entryComponents: [
   MyApp,
   HomePage,
   NewsPage,
   SignupPage,
   LoginPage,
   UploadPage,
   ChatPage,
   WebbrowserPage
 ],
 providers: [
   StatusBar,
   SplashScreen,
   ApiService,
   {provide: ErrorHandler, useClass: IonicErrorHandler}
 ]
})
export class AppModule {}