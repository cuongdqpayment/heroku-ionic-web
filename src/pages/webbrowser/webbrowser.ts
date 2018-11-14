import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiService } from '../../providers/apiService';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-webbrowser',
  templateUrl: 'webbrowser.html',
})
export class WebbrowserPage {

  url:string;
  content: Observable<any>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private apiService: ApiService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WebbrowserPage');
  }


  searchEnter(){
    this.content = this.apiService.getHtmlWeb(this.url);
  } 

}
