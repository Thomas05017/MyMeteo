import { Component } from '@angular/core';
import { Weather } from './weather/weather';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Weather],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  title = 'frontend';
}