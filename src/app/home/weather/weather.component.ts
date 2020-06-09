import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weatherService/weather.service';
import { WeatherDto } from 'src/app/models/weather-dto.model';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weather: WeatherDto;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
  }
  onClick() {
    this.getWeather();
  }

  private getWeather() {
    this.weatherService.getWeather().subscribe(data => {
      this.weather = data;
    });
  }
}
