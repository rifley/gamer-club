import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  providers: [PlayerService]
})
export class PlayerListComponent implements OnInit {
  players: FirebaseListObservable<any[]>;
  admin: boolean = null;
  filterByDivision: string;

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
    let adminStatus = this.playerService.getAdminStatus().subscribe((admin) => {
      this.admin = admin.value;

    });
  }

  goToDetailsPage(player: any) {
     this.router.navigate(['players', player.$key]);
  }

  onChange(optionFromMenu) {
    this.filterByDivision = optionFromMenu;
  }

}
