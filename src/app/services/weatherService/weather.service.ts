import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherDto } from 'src/app/models/weather-dto.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  requestUrl = environment.baseUrl + environment.weatherUrl;
  token = environment.token;

  constructor(private http: HttpClient) { }

  getWeather(): Observable<WeatherDto> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${this.token}`)
        .set('Content-Type', 'application/json')

    }
    return this.http.get<WeatherDto>(this.requestUrl, header);
  }
}