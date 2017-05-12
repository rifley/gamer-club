import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  providers: [PlayerService]
})
export class PlayerListComponent implements OnInit {
  players: FirebaseListObservable<any[]>;

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
    var subs = this.playerService.getPlayers().subscribe((player)=>{
      console.log(player);
      subs.unsubscribe();
    })
  }

}
