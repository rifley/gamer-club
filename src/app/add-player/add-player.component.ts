import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css'],
  providers: [PlayerService]
})
export class AddPlayerComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }
  submitNewPlayer(name: string, tag: string, url: string, bio: string, champ1: string, champ2: string, champ3: string, role: string, division: string, catchPhrase: string){
    var favoriteChampions : string[] = [champ1, champ2, champ3];
    var newPlayer: Player = new Player(name, tag, url, bio, favoriteChampions, role, division, catchPhrase);
    this.playerService.addPlayer(newPlayer);

  }

}
