import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  @Input() selectedPlayer;
  playerId: string;
  activePlayer: any;
  admin: boolean;
  showing: boolean;
  constructor(private playerService: PlayerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.playerId = (urlParameters['id']);
    });
    let currentPlayer = this.selectedPlayer.subscribe((player)=> {
      console.log(player);
      this.activePlayer = player;
    });
    let adminStatus = this.playerService.getAdminStatus().subscribe((admin) => {
      this.admin = admin.value;
    });
    console.log(this.activePlayer);
  }

  updatePlayer(name: string, tag: string, url: string, bio: string, champ1: string, champ2: string, champ3: string, role: string, division: string, catchPhrase: string) {
    let favoriteChampions: string[] = [champ1, champ2, champ3];
    let updatedPlayer: Player = new Player(name, tag, url, bio, favoriteChampions, role, division, catchPhrase);
    this.playerService.updatePlayer(updatedPlayer, this.playerId);
  }

  showEditPlayerForm() {
    this.showing = true;
  }

  hideEditPlayerForm() {
    this.showing = false;
  }

  deletePlayer() {
    this.playerService.deletePlayer(this.playerId);
    this.router.navigate(['roster']);
  }

}
