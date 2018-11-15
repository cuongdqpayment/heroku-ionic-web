import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiService } from '../../providers/apiService';
import { SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'page-webbrowser',
  templateUrl: 'webbrowser.html',
})
export class WebbrowserPage {

  public url: string;
  public title: string;
  public link: SafeResourceUrl;
  public content: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private sanitizer: DomSanitizer,
              private apiService: ApiService
              ) {
  }

  searchEnter(){
    //neu parse truc tiep se cho ra web nguyen mau
    this.link = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    
    //neu muon doc lay text thoi thi phai chuyen sang html nhung vao
    //<div style="overflow-x:auto;" [innerHTML]="this.content"></div>
    /* this.apiService.getHtmlWeb(this.url)
        .subscribe( texthtml => this.content = this.sanitizer.bypassSecurityTrustHtml(texthtml))
        ,(err=>console.log(err)); */
  } 

  goBack(){
    this.navCtrl.pop();
  }

}
