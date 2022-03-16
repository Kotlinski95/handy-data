import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.scss']
})
export class WeatherDataComponent implements OnInit {

  constructor() { }
  name: string = "Weather-Data";
  places: Array<String> = ["Katowice", "Krakow", "Zory"];
  isVisible = true;
  isHidden = false;
  ngOnInit(): void {
  }

  show(): void {
    this.isVisible = !this.isVisible;
  }

  hidden(): void {
    this.isHidden = !this.isHidden;
  }

}
