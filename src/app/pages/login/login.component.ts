import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [DialogService]
})
export class LoginComponent {
  value!: string;
  ref!: any;

  constructor(
    private titleService: Title,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Login');
  }

  onForgotPassword() {
    this.ref = this.dialogService.open(ForgotPasswordComponent, {
      header: 'Forgot Password',
      width: '33rem',
      modal: true,
      draggable: true
    });

    this.ref.onClose.subscribe((response: any) => {
      console.log(response);
    });
  }
}
