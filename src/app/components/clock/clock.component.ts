import { Component, OnInit } from '@angular/core';
import {ClockServiceService} from '../../services/clock-service.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  private _clockSubscription: Subscription;
  time: Date;

  constructor(private clockService: ClockServiceService) { }

  ngOnInit(): void {
    this._clockSubscription = this.clockService.getClock().subscribe(time => this.time = time);
  }

  ngOnDestroy(): void {
    this._clockSubscription.unsubscribe();
  }
}
