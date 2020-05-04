import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params} from '@angular/router';
import {User} from '../../models/user';
import { Route } from '@angular/router/src/config';
import { FlashMessagesModule } from 'angular2-flash-messages/module/module';
import {AuthService} from '../../services/auth.service';
 
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id: string;
  user: User;
  isConected: boolean;

  constructor( 
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessageService: FlashMessagesService
  ) { }

  ngOnInit() {
    //get id from URL
    this.id = this.route.snapshot.params['id'];
    //get user
    this.userService.getUser(this.id).subscribe(user=> {
      this.user = user;
    })
    this.isConected = this.user.con;
    
  }
  onDeleteClick()
  {
    if (confirm("are you sure you want to delete?"))
    {
      this.userService.deleteUser(this.id);
      this.flashMessageService.show('user as been removed',{
        cssClass:'alert-success', timeout:2000
      });
      this.router.navigate(['/stuff'])
    }

  }


}
