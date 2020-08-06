import { Component, OnInit } from '@angular/core';
import { latLng, MapOptions, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  mapOptions: MapOptions;

  constructor() { }
  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    this.mapOptions = {
      center: latLng(52.237, 21.017),
      zoom: 4,
      layers: [
        tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 12,
            attribution: 'Map data © OpenStreetMap contributors'
          })
      ],
    };

  }
}
