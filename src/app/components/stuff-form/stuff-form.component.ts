import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Route } from '@angular/router/src/config';
import { Router, ActivatedRoute, Params} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { FlashMessagesModule } from 'angular2-flash-messages/module/module';
import {AuthService} from '../../services/auth.service';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@Component({
  selector: 'app-stuff-form',
  templateUrl: './stuff-form.component.html',
  styleUrls: ['./stuff-form.component.css']
})
export class StuffFormComponent implements OnInit {
  id: string;
  users: any[];


  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessageService: FlashMessagesService
  ) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(users=> {
      this.users = users;
    });

    /*
      if( 0 == 0)
      {
      var temp = document.getElementsByClassName("row")[0];
      console.log(temp);
      temp.innerHTML = "<p>Access denied.</p>";
      
      this.router.navigate(['/patient']);
      }
      */
      
  }

}
