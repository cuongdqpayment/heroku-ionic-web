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
  content:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private apiService: ApiService) {
  }

  searchEnter(){
    this.apiService.getHtmlWeb(this.url).subscribe(data=> 
      {
        console.log(data);
        this.content=data;
      }
    );
  } 

}
