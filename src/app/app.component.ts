import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  title = 'SportsAppClient';


  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon("twittericon", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/twitter.svg"));
    this.matIconRegistry.addSvgIcon("uploadicon", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/upload-button.svg")
    );
  }
}