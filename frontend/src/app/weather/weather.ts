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
  city = 'Milano';
  weatherData: any;
  loading = false;

  constructor(private http: HttpClient) {}

  getWeather() {
    if (!this.city.trim()) return;
    
    this.loading = true;
    this.http.get(`http://localhost:8000/api/weather/${this.city}`).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Errore nel recupero dei dati meteo:', error);
        this.loading = false;
      }
    });
  }
}