import { Component, OnInit, OnChanges, Input } from '@angular/core';
import {Observable} from 'rxjs';
import {ChatMessage} from '../../models/chat-message';
import {ChatService} from '../../services/chat.service';
import {UserService} from '../../services/user.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Route } from '@angular/router/src/config';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {

    feed: any;
    id: string;

  constructor(private chat: ChatService, private chatUsers: UserService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.feed = this.chat.getMessages();
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
  }
  ngOnChanges() {
    this.feed = this.chat.getMessages(); // get messges with id of the specipice user
    
  }
}
