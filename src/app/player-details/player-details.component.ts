import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css'],
  providers: [PlayerService]
})
export class PlayerDetailsComponent implements OnInit {
  playerTag : string = null;


  constructor(private playerService: PlayerService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters)=> {
      this.playerTag = (urlParameters['tag']);
    });
    console.log(this.playerTag);

  }

}
