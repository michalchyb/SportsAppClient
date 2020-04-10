import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weatherService/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weather;  

  constructor(private weatherService:WeatherService) { }

  ngOnInit():void {
    this.weatherService.getWeather().subscribe(data=>{
      this.weather = data;
    })
  }
}
