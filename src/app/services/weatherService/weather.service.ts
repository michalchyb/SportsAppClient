import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  requestUrl = environment.baseUrl + environment.weatherUrl;
  token = 'Bearer ' + environment.token;

  constructor(private http: HttpClient) { }

  public getWeather(): Observable<any> {

    var header = {
      headers: new HttpHeaders()
        .set('Authorization', this.token )
        .set('Content-Type', 'application/json')

    }
    return this.http.get<Weather>(this.requestUrl, header);
  }
}

interface Weather {
  name: String;
  weather: String;
  weatherIcon: String;
  temp: Number;
  pressure: Number;
  minTemp: Number;
  maxTemp: Number;
}