import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Route } from '@angular/router/src/config';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  

  constructor( 
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    }
  }

