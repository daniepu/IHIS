import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params} from '@angular/router';
import {User} from '../../models/user';
import { Route } from '@angular/router/src/config';
import { FlashMessagesModule } from 'angular2-flash-messages/module/module';
import {SettingsService} from '../../services/settings.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  id: string;
  user: any;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessageService: FlashMessagesService,
    private settingsService: SettingsService
  ) {}
  

  ngOnInit() {}
}

