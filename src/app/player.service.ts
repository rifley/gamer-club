import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;
  admin: any;
  constructor(private database: AngularFireDatabase) {
      this.players = database.list('players');
      this.admin = database.object('admin');
  }

  getPlayers() {
    return this.players;
  }
  getAdminStatus() {
    return this.admin;

  }
  getPlayerById(playerId: string) {
    return this.database.object('players/' + playerId);
  }

  setAdmin() {
    let adminStatus = this.admin;
    adminStatus.update({value: true});
  }


  setNormalUser() {
    let adminStatus = this.admin;
    adminStatus.update({value: false});
  }

  addPlayer(newPlayer: Player) {
    this.players.push(newPlayer);
  }

  deletePlayer(playerId: string) {
    let player = this.getPlayerById(playerId);
    player.remove();
  }

  updatePlayer(updatedPlayer: Player, id: string){
    let playerInFirebase = this.getPlayerById(id);
    playerInFirebase.update({name: updatedPlayer.name,
                            tag: updatedPlayer.tag, image: updatedPlayer.image, bio: updatedPlayer.bio, favoriteChampions: updatedPlayer.favoriteChampions, role: updatedPlayer.role, division: updatedPlayer.division, catchPhrase: updatedPlayer.catchPhrase});
  }
}
