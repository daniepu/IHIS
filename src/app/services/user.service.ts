import { element } from 'protractor';
import { User } from './../models/user';
import { Injectable, Query } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject, snapshotChanges} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import {Router} from '@angular/router';
import { query } from '@angular/core/src/animation/dsl';
import { database } from 'firebase/app';
import { FirebaseApp } from 'angularfire2';
import { elementAt } from 'rxjs/operators';

@Injectable()
export class UserService {

  usersRef: AngularFireList<any>;
  isStuff: Promise<any>;
  users: Observable<any[]>;
  user: Observable<any>;
  sou: database.DataSnapshot;

  constructor(private db: AngularFireDatabase, private router: Router) { 
    this.usersRef = this.db.list('users');
    this.users = this.usersRef.snapshotChanges().map(changes => {
      return changes.map(c=>({key: c.payload.key, ...c.payload.val()
      }));
    });
  }
  
  getUsers()
  {
    return this.users;
  }
  newUser(user: User)
  {
    this.usersRef.push(user);
    return this.user
  }
  getUser(id: string)
  {
    this.user = this.db.object('/users/'+id).valueChanges();
    return this.user;
  }
  getStuff(id: string)
  {
    this.user = this.db.object('/stuff/'+id).valueChanges();
    return this.user;
  }
  updateUser(id: string, user:User){
    return this.usersRef.update(id,user);
  }
  deleteUser(id: string)
  {
    return this.usersRef.remove(id);
  }
  StuffOrUser(email: string , password: string)
  {
        return this.usersRef.query.orderByChild('email').equalTo(email).once('value').then(function(snapshot){ 
        var a  = snapshot.exists();
        return a;
        });
  }
}
