import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class WeatherProvider {

  apiKey = "22bc862e9465e98d1c74b7351cab36ef";
  url;

  constructor(public http: Http) {
    //console.log('Hello WeatherProvider Provider');
    this.url="https://api.openweathermap.org/data/2.5/weather?id=1905468&APPID=22bc862e9465e98d1c74b7351cab36ef&units=metric";

  }

  getWeather(city, state){
    return this.http.get(this.url)
    .map(res=>res.json())
  }
}
