import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from './auth/service/auth.service';
import { MediaChange, ObservableMedia } from "@angular/flex-layout";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AWES';

  mode: string = 'side';
  opened: boolean = true;

  constructor(private media: ObservableMedia,private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private authService: AuthService) {
    this.matIconRegistry.addSvgIcon(
      `facebook`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/facebook.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `google-plus`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/google-plus.svg")
    );
    console.log('registered icon');

    this.media.subscribe((mediaChange: MediaChange) => {
      this.mode = this.getMode(mediaChange);
      
    });
  }

  private getMode(mediaChange: MediaChange): string {
    // set mode based on a breakpoint
    if (this.media.isActive('gt-sm')) {
      this.opened=true;
      return 'side';
      
    } else {
      this.opened=false;
      return 'over';
    }
    
  }

  public isAuthorized(): boolean {
    return this.authService.getCurrent() != null;
  }
  public getUserName():String{
    return this.authService.getCurrent().name + " "+ this.authService.getCurrent().surname;
    return "XXX";
  }
}