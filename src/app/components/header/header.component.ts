import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import { Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {SettingsService} from '../../services/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isConnected: boolean;
  connectUser: string;
  showLogin: boolean;
  showRegister: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMassegesService: FlashMessagesService,
    private settingsService: SettingsService,
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if(auth)
      {
        this.isConnected = true;
        this.connectUser = auth.email;
      }
      else{
        this.isConnected = false;
      }
    });
    this.showRegister = this.settingsService.getSettings().allowRegistration;
  }

  onLogoutClick()
  {
    this.authService.logout();
    this.flashMassegesService.show('You are logged out', {
      cssClass:'alert-success', timeout: 4000
    })
    this.router.navigate(['/']);
  }
}
