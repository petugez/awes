import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AWES';
  constructor(private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      `facebook`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/facebook.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `google-plus`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/google-plus.svg")
    );
    console.log('registered icon');
    
  }
}