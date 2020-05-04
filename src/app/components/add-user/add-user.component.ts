import { MatMenuModule } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service';
import {SettingsService} from '../../services/settings.service';
import {AuthService} from '../../services/auth.service';
import { promise } from 'protractor';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  authk: any;
  user: User = {
    auth:1,
    department: '',
    email:'',
    firstName:'',
    lastName:'',
    phone:'',
    con:false,
    password:''
  }
  disableAuthOnAdd: boolean = false;
  constructor(private flashMessagesService: FlashMessagesService,
  private authService: AuthService,
  private router: Router,
  private userService: UserService,
  private settingsService: SettingsService) { }

  ngOnInit() {
    this.disableAuthOnAdd = this.settingsService.getSettings().disableAuthOnAdd
  }

  onSubmit({value, valid}: {value: User, valid:boolean })
  {
    if(this.disableAuthOnAdd)
    {
      value.auth=1;
    }
    if(!valid)
    {
      this.flashMessagesService.show('please fill in all filed',{
        cssClass: 'alert-danger', timeout: 2000
      });
      this.router.navigate(['add-user']);
    }
    else{
      var id;;
      //add new client
      this.authService.register(this.user.email,this.user.password,value);
      //this.userService.newUser(value);
      this.flashMessagesService.show('new user added',{
        cssClass: 'alert-success', timeout: 2000
      });
      this.router.navigate(['/stuff']);
    }
  }

}
