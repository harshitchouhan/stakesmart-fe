import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'mines',
        loadChildren: () =>
          import('./../../games/mines/mines.module').then((m) => m.MinesModule),
      },
      {
        path: 'dragon-tower',
        loadChildren: () =>
          import('./../../games/dragon-tower/dragon-tower.module').then(
            (m) => m.DragonTowerModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
