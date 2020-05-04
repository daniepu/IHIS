import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs';
import {ChatMessage} from '../../models/chat-message';
import {ChatService} from '../../services/chat.service';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() chatMessage: ChatMessage;
  userEmail: string;
  userName: string;
  messageContent: string;
  timeStemp: string;
//isOwnMessage = boolean

  constructor() { }

  ngOnInit(chatMessage = this.chatMessage) {
    this.messageContent = chatMessage.message;
    this.timeStemp = chatMessage.timeSent;
    this.userEmail = chatMessage.email;
    this.userName = chatMessage.userName;
  }

}
