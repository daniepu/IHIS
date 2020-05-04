import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[];

  constructor(private userService: UserService) {  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users=> {
      this.users = users;
    });
    
  }
}
