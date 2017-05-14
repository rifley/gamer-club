import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-roster-page',
  templateUrl: './roster-page.component.html',
  styleUrls: ['./roster-page.component.css'],
  providers: [PlayerService]
})
export class RosterPageComponent implements OnInit {
  admin: boolean = null;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    var adminStatus = this.playerService.getAdminStatus().subscribe((admin)=>{
      this.admin = admin.value;
    })
  }




}
