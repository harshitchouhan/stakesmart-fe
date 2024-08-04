import { Component, ViewEncapsulation } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-mines',
  standalone: true,
  imports: [TabViewModule, TooltipModule],
  templateUrl: './mines.component.html',
  styleUrl: './mines.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MinesComponent {}
