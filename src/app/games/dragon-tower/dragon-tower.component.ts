import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { ManualInputsComponent } from './manual-inputs/manual-inputs.component';

@Component({
  selector: 'app-dragon-tower',
  standalone: true,
  imports: [
    TabViewModule,
    TooltipModule,
    ButtonModule,
    CommonModule,
    ManualInputsComponent,
  ],
  templateUrl: './dragon-tower.component.html',
  styleUrl: './dragon-tower.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DragonTowerComponent {
  @ViewChild('beepAudio') beepAudio!: ElementRef;
  @ViewChild('bombAudio') bombAudio!: ElementRef;

  mines: any = [];

  selectedMines: any = [];
  selectedMinesIds: any = [];
  selectedMine: any;
  disableGame = false;

  activeRow = [21, 22, 23]

  constructor() {
    this.mines = [];
    for (let i = 1; i <= 24; i++) {
      this.mines.push({ revealed: false, bomb: false, id: i, selected: false });
    }

    this.mines[4].bomb = true;
    this.mines[19].bomb = true;
    this.mines[14].bomb = true;
  }

  onMineClick(mine: any) {
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
