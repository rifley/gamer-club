import { Component, OnInit } from '@angular/core';
import { Fan } from '../fan.model';

@Component({
  selector: 'app-new-fan',
  templateUrl: './new-fan.component.html',
  styleUrls: ['./new-fan.component.css']
})
export class NewFanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitNewFan(name: string, nickName: string, favoritePlayer: string, catchPhrase: string) {
    var newFan : Fan = new Fan(name, nickName, favoritePlayer, catchPhrase);
  }
}
