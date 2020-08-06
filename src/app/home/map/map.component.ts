import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import * as Map from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  private map;

  ngAfterViewInit(): void {
    this.initMap();
  }
  private initMap(): void {
    this.map = Map.map('map', {
      center: [52.2370, 21.017],
      zoom: 6,
      layers: [
        Map.tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 12,
            attribution: 'Map data © OpenStreetMap contributors'
          }
        )
      ]
    });
  }
}
