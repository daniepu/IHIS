import { Component, OnInit } from '@angular/core';
import {ClockServiceService} from '../../services/clock-service.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private clockSubscription: Subscription;
  time: Date;
 

  constructor(private clockService: ClockServiceService) { }

  ngOnInit() {
    this.clockSubscription = this.clockService.getClock().subscribe(time => this.time = time);
  }

}
