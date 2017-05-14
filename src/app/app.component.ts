import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlayerService]
})
export class AppComponent implements OnInit {
  admin: boolean = null;

  constructor(private playerService: PlayerService) {}

  ngOnInit(){
    var adminStatus = this.playerService.getAdminStatus().subscribe((admin)=>{
      this.admin = admin.value;
    });
  }

  setAdmin() {
    this.playerService.setAdmin();
  }

  setNormalUser() {
    this.playerService.setNormalUser();
  }

}
