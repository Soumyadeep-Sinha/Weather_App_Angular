import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.css']
})
export class WeatherPageComponent {
  city: string = '';
  weatherData: any;
  icon = '';
  imageurl = "";
  constructor(private http: HttpClient) {}

  getWeather() {
    if (this.city) {
      const apiKey = 'edd126b9fade18f89566e6a5fb04c0b8';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}&units=metric`;

      this.http.get(apiUrl).subscribe((data: any) => {
        this.weatherData = data;
        this.icon = this.weatherData.weather[0].icon;
        this.imageurl = `http://openweathermap.org/img/wn/${this.icon}@2x.png`
      });
    }
  }
}
