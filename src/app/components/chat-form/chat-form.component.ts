import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ChatService} from '../../services/chat.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

    message: string;
    id: string;

  constructor(private chatService: ChatService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
  }

  send(){
    this.chatService.sendMessage(this.message,this.id);
    this.message = ' ';
  }

  handleSubmit(event)
  {
    if(event.keyCode === 13)
    {    
      this.send();
    }
  }
}
