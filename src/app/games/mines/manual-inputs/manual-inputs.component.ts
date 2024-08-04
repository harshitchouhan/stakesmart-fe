import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-manual-inputs',
  standalone: true,
  imports: [FormsModule, InputNumberModule, DropdownModule, ButtonModule],
  templateUrl: './manual-inputs.component.html',
  styleUrl: './manual-inputs.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ManualInputsComponent {
  value!: any;
  mines!: any;

  minesOptions: any = [];

  constructor() {
    this.minesOptions = [];
    for (let i = 1; i < 25; i++) {
      this.minesOptions.push({ label: i, value: i });
    }
  }
}
