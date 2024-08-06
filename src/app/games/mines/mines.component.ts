import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
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
  @ViewChild('beepAudio') beepAudio!: ElementRef;
  @ViewChild('bombAudio') bombAudio!: ElementRef;
  
  mines: any = [];

  selectedMines: any = [];
  selectedMinesIds: any = [];
  selectedMine: any;
  disableGame = false;

  constructor() {
    this.mines = [];
    for (let i = 1; i <= 25; i++) {
      this.mines.push({ revealed: false, bomb: false, id: i, selected: false });
    }

    this.mines[4].bomb = true;
    this.mines[19].bomb = true;
    this.mines[14].bomb = true;
  }

  onMineClick(mine: any) {
    console.log(mine);
    if (this.disableGame) {
      return;
    }

    this.selectedMine = mine;
    if (!mine.bomb) {
      mine.selected = true;
      this.selectedMines.push(mine);
      this.selectedMinesIds.push(mine.id);
      this.beepAudio.nativeElement.play();
    } else {
      this.bombAudio.nativeElement.play();
      this.disableGame = true;
      this.mines.forEach((value: any) => {
        value.revealed = true;
      });
    }
  }
}
