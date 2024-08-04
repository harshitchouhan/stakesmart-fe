import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinesComponent } from './mines.component';

const routes: Routes = [
  {
    path: '',
    component: MinesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinesRoutingModule {}
