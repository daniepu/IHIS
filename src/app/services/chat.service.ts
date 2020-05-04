import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs';
import { Router} from '@angular/router';
import { AngularFireDatabase , AngularFireList, AngularFireObject} from 'angularfire2/database';
import {ChatMessage} from '../models/chat-message';
import * as firebase from 'firebase/app'
import { User } from './../models/user';

@Injectable()
export class ChatService {

userId: any;
userDetails:User;
user: firebase.User;  
chatMessagesRef: AngularFireList<any>
chatMessages: Observable<any[]>;
chatMessage: any;
  
constructor(
  private db: AngularFireDatabase,
  private afAuth: AngularFireAuth,
  private userService: UserService
) {
  
  this.afAuth.authState.subscribe(auth =>{
    if (auth !== undefined && auth !== null) {
      this.user = auth;
      this.userId = auth.uid
    }

  });
  this.chatMessagesRef = this.db.list('messages');
  this.chatMessages = this.chatMessagesRef.snapshotChanges().map(changes => {
    return changes.map(c=>({key: c.payload.key, ...c.payload.val()
    }));
  });
 }

  sendMessage(msg: string, id: string)
  {
    //this.stuffService.getStuff(this.userId);
    const timestamp = this.getTimeStamp();
    const email = this.user.email;
    this.chatMessages = this.getMessages();
    this.chatMessagesRef.push({
      message: msg,
      timeSent: timestamp,
      userName: this.userDetails.firstName,
      email: this.user.email});
  }
  getMessages() {
    return this.chatMessages;
  }
  getTimeStamp()
  {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
                  (now.getUTCMonth()+1) + '/' +
                  now.getUTCDate();
    const time = now.getUTCHours() + ':' + 
                (now.getUTCMinutes()) + ':' +
                now.getUTCSeconds();
   return (date + ' ' + time); 
  }

}
