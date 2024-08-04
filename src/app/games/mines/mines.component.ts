import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';

import { ManualInputsComponent } from './manual-inputs/manual-inputs.component';

@Component({
  selector: 'app-mines',
  standalone: true,
  imports: [
    TabViewModule,
    TooltipModule,
    ManualInputsComponent,
    ButtonModule,
    CommonModule,
  ],
  templateUrl: './mines.component.html',
  styleUrl: './mines.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MinesComponent {
  mines: any = [];

  constructor() {
    this.mines = [];
    for (let i = 1; i <= 25; i++) {
      this.mines.push({ label: i, value: i });
    }
  }
}
