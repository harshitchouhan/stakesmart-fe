import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DividerModule } from 'primeng/divider';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CalendarModule,
    CommonModule,
    InputMaskModule,
    DividerModule,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SignupComponent {
  value!: string;
  value2!: string;
  date!: any;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Signup');
  }
}
