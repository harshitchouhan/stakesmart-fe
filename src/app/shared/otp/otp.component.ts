import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputOtpModule } from 'primeng/inputotp';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [InputOtpModule, FormsModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class OtpComponent {
  value!: any;
}
