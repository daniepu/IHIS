import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import { Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';
import { User } from '../../models/user';
import { resolve, reject } from 'q';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  user: User;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private flashMassegesService: FlashMessagesService,
    
  ) { 
   
  }
  ngOnInit() {
  }

  onSubmit()
  {

      this.authService.login(this.email, this.password)
      .then((res)=> {
        this.flashMassegesService.show('You are logged in', {
          cssClass:'alert-success', timeout: 2000
        }); 
        this.userService.StuffOrUser(this.email,this.password).then(val=> {
        console.log(val);
        if(val)
       {
         this.router.navigate(['/patient']);
       }
       else
       {
        this.router.navigate(['/stuff']); 
       }
      }).catch(err=>{
        console.log(err);
      });
      })     
      .catch((err)=> {
        this.flashMassegesService.show(err.message, {
          cssClass:'alert-danger', timeout: 2000
        });
        this.router.navigate(['/']);
      });
      
    }
  }
