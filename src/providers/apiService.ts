import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'


@Injectable()
export class ApiService {

  constructor(public httpClient: HttpClient, public sanitizer: DomSanitizer) {
  }

  getRandomUser(nRecord: number) {
    return this.httpClient.get('https://randomuser.me/api/?results=' + nRecord)
      .map(res => res['results'])

  }

  getHtmlWeb(url: string) {
    //ket qua tra ve la text hay json, neu la text thi phai xu ly chuyen doi html
    //this.sanitizer.bypassSecurityTrustHtml(webhtml)
    return this.httpClient.get(url,{ responseType: 'text'})
       .map(webhtml => webhtml);
  }

  getJsonLogin(url: string) {
    //dua chuoi url, tra ve ket qua json
    return this.httpClient.get(url)
       .toPromise()
       .then(data=>console.log(data));
  }

  postHtmlWeb(url: string, jsonRequest: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        //'Authorization': 'my-auth-token',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/html; text/html'
      })
    };

    return this.httpClient.post(url, jsonRequest, httpOptions)
      .subscribe(webhtml => this.sanitizer.bypassSecurityTrustHtml(webhtml['_body'])
      );
  }

}
