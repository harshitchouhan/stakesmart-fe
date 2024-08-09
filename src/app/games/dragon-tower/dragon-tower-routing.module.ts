import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragonTowerComponent } from './dragon-tower.component';

const routes: Routes = [
  {
    path: '',
    component: DragonTowerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragonTowerRoutingModule { }
