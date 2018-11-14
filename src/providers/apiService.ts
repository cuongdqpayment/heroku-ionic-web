import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class ApiService{

  constructor(public httpClient: HttpClient) {
  }

  getRandomUser(nRecord:number){
    return this.httpClient.get('https://randomuser.me/api/?results='+nRecord)
           .map(res => res['results'])
           
  }

  getHtmlWeb(url:string){
     return this.httpClient.get(url,{responseType: 'text'});
  }

}
