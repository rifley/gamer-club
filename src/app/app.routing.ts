import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { AboutComponent } from './about/about.component';
import { RosterPageComponent } from './roster-page/roster-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'players/:id',
    component: PlayerDetailsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'roster',
    component: RosterPageComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
