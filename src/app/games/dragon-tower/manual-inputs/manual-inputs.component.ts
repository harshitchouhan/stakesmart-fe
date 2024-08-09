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
  optionSelected!: any;

  difficultyOptions: any = [
    {
      label: 'Easy',
      value: 'Easy',
    },
    {
      label: 'Medium',
      value: 'Medium',
    },
    {
      label: 'Hard',
      value: 'Hard',
    },
  ];

  constructor() {}
}
