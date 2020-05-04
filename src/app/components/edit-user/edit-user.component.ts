import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params} from '@angular/router';
import {User} from '../../models/user';
import { Route } from '@angular/router/src/config';
import { FlashMessagesModule } from 'angular2-flash-messages/module/module';
import {SettingsService} from '../../services/settings.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id: string;
  user: User = {
    auth:1,
    department: '',
    email:'',
    firstName:'',
    lastName:'',
    phone:'',
    con:false
  }
  disableAuthOnEdit: boolean = true;
  constructor(    
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessageService: FlashMessagesService,
    private settingsService: SettingsService,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
     //get user
     this.userService.getUser(this.id).subscribe(user=> {
       this.user = user;
     })

     this.disableAuthOnEdit = this.settingsService.getSettings().disableAuthOnEdit;
  }
  onSubmit({value, valid}: {value: User, valid:boolean })
  {
    if(!valid)
    {
      this.flashMessageService.show('please fill in all filed',{
        cssClass: 'alert-danger', timeout: 4000
      });
      this.router.navigate(['edit-user/'+this.id]);
    }
    else{
      //update client
      this.userService.updateUser(this.id,value);
      this.flashMessageService.show('User updated',{
        cssClass: 'alert-success', timeout: 4000
      });
      this.router.navigate(['/user/'+this.id]);
    }
  }
 


}
