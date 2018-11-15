import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { WebbrowserPage } from '../pages/webbrowser/webbrowser';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;

  rootPage:any = HomePage;
  pages: any =
    [{title:"Trang chủ",
      page_id:1
      },
      {title:"Tìm kiếm",
      page_id:2
      }];

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen
            ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goSearch(){
    this.navCtrl.push(WebbrowserPage);
  }

  openPage(page){
    let page_id = page.page_id;
    
    switch (page_id) {
      case 1:
        this.navCtrl.setRoot(HomePage);
        break;
      case 2:
      this.navCtrl.push(WebbrowserPage);
        break;
      default:
        break;
    }
  }
}

