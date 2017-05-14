import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  admin: boolean= null;
  constructor() { }

  ngOnInit() {
  }

  setAdmin() {
    this.admin = true;
  }
  setNormalUser() {
    this.admin = null;
  }
}
