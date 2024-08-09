import { Component } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DividerModule } from 'primeng/divider';


@Component({
  selector: 'app-player-signup',
  standalone: true,
  imports: [
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    PasswordModule,
    CalendarModule,
    InputMaskModule,
    InputNumberModule,
    FloatLabelModule,
    KeyFilterModule,
    DividerModule
  ],
  templateUrl: './player-signup.component.html',
  styleUrl: './player-signup.component.scss',
})
export class PlayerSignupComponent {}
