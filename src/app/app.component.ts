import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
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
      {title:"Tin tức",
      page_id:2
      },
      {title:"Tìm kiếm",
      page_id:99
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
        this.navCtrl.push(NewsPage);
        break;
      case 99:
      this.navCtrl.push(WebbrowserPage);
        break;
      default:
        break;
    }
  }
}

