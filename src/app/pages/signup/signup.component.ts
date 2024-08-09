import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DividerModule } from 'primeng/divider';
import { DialogService } from 'primeng/dynamicdialog';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { TabViewModule } from 'primeng/tabview';

import { OtpComponent } from '../../shared/otp/otp.component';
import { RouterModule } from '@angular/router';

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
    InputNumberModule,
    OtpComponent,
    TabViewModule,
    BadgeModule,
    AvatarModule,
    RouterModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [DialogService],
})
export class SignupComponent {
  value!: string;
  value2!: string;
  date!: any;

  ref!: any;

  constructor(
    private titleService: Title,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Signup');
  }

  openOtpDialog() {
    this.ref = this.dialogService.open(OtpComponent, {
      header: 'Enter OTP',
      width: '20rem',
      modal: true,
      draggable: true,
    });

    this.ref.onClose.subscribe((response: any) => {
      console.log(response);
    });
  }
}
