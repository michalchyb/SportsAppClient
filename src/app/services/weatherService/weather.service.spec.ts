import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { WeatherService } from './weather.service';
import { WeatherDto } from 'src/app/models/weather-dto.model';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService]
    }).compileComponents();
    service = TestBed.inject(WeatherService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('be able to retrieve weather from the API via GET', () => {
    const dummyWeather: WeatherDto = {
      name: 'City',
      weather: 'Clear',
      weatherIcon: '02d',
      temp: 20.0,
      pressure: 1024.0,
      minTemp: 18.0,
      maxTemp: 22.0
    };
    service.getWeather().subscribe(data => {
      expect(data.name).toEqual('City');
      expect(data.weather).toEqual('Clear');
      expect(data.weatherIcon).toEqual('02d');
      expect(data.temp).toEqual(20.0);
      expect(data.pressure).toEqual(1024.0);
      expect(data.minTemp).toEqual(18.0);
      expect(data.maxTemp).toEqual(22.0);

    });

    const request = httpMock.expectOne(`http://localhost:8080/api/weather`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyWeather);
  });
})
