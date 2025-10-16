import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.html',
})
export class WeatherComponent {
  city = 'Milano';
  weatherData: any;

  constructor(private http: HttpClient) {}

  getWeather() {
    this.http.get(`http://localhost:8080/api/weather/${this.city}`).subscribe(data => {
      this.weatherData = data;
    });
  }
}
