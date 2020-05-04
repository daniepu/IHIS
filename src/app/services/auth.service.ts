import { element } from 'protractor';
import { User } from './../models/user';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs';
import { Router} from '@angular/router';
import { AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  private curpass: string;
  private curemail: string;
  private userid: any;
 private user: Observable<firebase.User>
 private adduser: Observable<firebase.User>;
 private authState: any;

  constructor(private afAuth: AngularFireAuth,
private db: AngularFireDatabase,private userservice: UserService)
  {
    this.user = afAuth.authState;
  }

  login(email: string , password: string){
    return this.afAuth.auth.signInWithEmailAndPassword(email,password)
      .then((user)=> {
        this.curemail = email;
        this.curpass = password;
      }).catch(error => console.log("error was happend"));  
  }
/*
  login(email: string , password: string){
    return this.afAuth.auth.signInWithEmailAndPassword(email,password)
      .then((resolve)=>{
        const status = 'online';
        this.setUserStatus(status);
      });
      
  }
  */
  register(email: string , password: string,value :User){
    this.afAuth.auth.createUserWithEmailAndPassword(email,password)
      .then((user)=> {
        //this.authState = user;
        this.userid = this.afAuth.auth.currentUser.uid;
        value.con = true;
        this.userservice.updateUser(this.userid,value);
      }).catch(error => console.log("error was happend"));
  }
  /*
  register(email: string , password: string){

    return new Promise((resolve,reject)=> {
      this.afAuth.auth.createUserWithEmailAndPassword(email,password)
      .then(userData => resolve(userData),
    err => reject(err));
    });
  }
*/
   currentUserId(): string{
   return this.userid;
 }
 
 setUserData(email:string , status: string, id): void{
   const path = 'users/'+id;
   const data = {
     email: email,
     status: status
   };

   this.db.object(path).update(data)
   .catch(error => console.log(error));
 }
 setUserStatus(status: string): void{
  const path = 'users/'+this.currentUserId;
  const data = {
    status: status
  };
  this.db.object(path).update(data)
}

  curAuthId()
  {
  return this.authState.uid;
  }
  getAuth()
  {
    return this.afAuth.authState.map(auth=> auth);
  }
  
  logout()
  {
    this.afAuth.auth.signOut();
  }
  

}
