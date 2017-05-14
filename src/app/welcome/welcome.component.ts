import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [PlayerService]
})
export class WelcomeComponent implements OnInit {
  admin: any;
  constructor(private playerService : PlayerService) { }

  ngOnInit() {
    var adminStatus = this.playerService.getAdminStatus().subscribe((admin)=>{
      this.admin=admin.value;
      console.log(admin);
    });
  }

  setAdmin() {
    this.playerService.setAdmin();
  }
  setNormalUser() {
    this.playerService.setNormalUser();
  }
}
