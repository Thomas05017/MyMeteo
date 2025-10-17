import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './weather.html',
  styleUrls: ['./weather.scss']
})
export class Weather {
  city = 'Cascina';
  weatherData: any;
  loading = false;

  constructor(private http: HttpClient) {}

  getWeather() {
    if (!this.city.trim()) return;
    
    this.loading = true;
    this.weatherData = null;
    
    this.http.get(`http://localhost:8000/api/weather/${this.city}`).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Errore nel recupero dei dati meteo:', error);
        this.loading = false;
        alert('Impossibile recuperare i dati meteo. Verifica il nome della città.');
      }
    });
  }

  getWeatherIcon(): string {
    if (!this.weatherData || !this.weatherData.weather || !this.weatherData.weather[0]) {
      return 'wb_sunny';
    }

    const condition = this.weatherData.weather[0].main.toLowerCase();
    const description = this.weatherData.weather[0].description.toLowerCase();
    const icon = this.weatherData.weather[0].icon;

    const isNight = icon.includes('n');

    // Temporale
    if (condition.includes('thunderstorm')) {
      return 'thunderstorm';
    }

    // Pioggia
    if (condition.includes('rain')) {
      return 'grain';
    }

    // Neve
    if (condition.includes('snow')) {
      return 'ac_unit';
    }

    // Nebbia/foschia
    if (condition.includes('mist') || condition.includes('fog')) {
      return 'foggy';
    }

    // Nuvoloso
    if (condition.includes('clouds')) {
      if (description.includes('few')) {
        if (isNight) return 'nights_stay';
      }
      return 'cloud';
    }

    // Sereno
    if (condition.includes('clear')) {
      return isNight ? 'bedtime' : 'wb_sunny';
    }

    // Default
    return isNight ? 'bedtime' : 'wb_sunny';
  }

  getWeatherIconColor(): string {
    if (!this.weatherData || !this.weatherData.weather || !this.weatherData.weather[0]) {
      return '#fbbf24';
    }

    const condition = this.weatherData.weather[0].main.toLowerCase();
    const description = this.weatherData.weather[0].description.toLowerCase();

    // Pioggia/Temporale - blu scuro
    if (condition.includes('rain') || condition.includes('thunderstorm')) {
      return '#3b82f6';
    }

    // Neve - azzurro chiaro
    if (condition.includes('snow')) {
      return '#60a5fa';
    }

    // Nebbia - grigio
    if (condition.includes('mist') || condition.includes('fog')) {
      return '#9ca3af';
    }

    // Nuvoloso - grigio scuro
    if (condition.includes('clouds')) {
      return '#6b7280';
    }

    // Sereno - giallo/arancione
    const icon = this.weatherData.weather[0].icon;
    const isNight = icon.includes('n');
    return isNight ? '#818cf8' : '#fbbf24';
  }
}