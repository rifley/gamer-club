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
  showing: boolean = false;
  admin: boolean;
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    let adminStatus = this.playerService.getAdminStatus().subscribe((admin) => {
      this.admin = admin.value;
    });
  }
  submitNewPlayer(name: string, tag: string, url: string, bio: string, champ1: string, champ2: string, champ3: string, role: string, division: string, catchPhrase: string) {
    let favoriteChampions: string[] = [champ1, champ2, champ3];
    let newPlayer: Player = new Player(name, tag, url, bio, favoriteChampions, role, division, catchPhrase);
    this.playerService.addPlayer(newPlayer);

  }

  showNewPlayerForm() {
    this.showing = true;
  }

  hideNewPlayerForm() {
    this.showing = false;
  }

}
