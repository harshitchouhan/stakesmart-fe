import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpEvent } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { PasswordModule } from 'primeng/password';
import { StepperModule } from 'primeng/stepper';
import { ToastModule } from 'primeng/toast';

interface UploadEvent {
  originalEvent: HttpEvent<any>;
  files: File[];
}

@Component({
  selector: 'app-promotor-signup',
  standalone: true,
  imports: [
    ButtonModule,
    StepperModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    PasswordModule,
    CalendarModule,
    InputMaskModule,
    InputNumberModule,
    FloatLabelModule,
    KeyFilterModule,
    DividerModule,
    DropdownModule,
    FileUploadModule,
    ToastModule,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './promotor-signup.component.html',
  styleUrl: './promotor-signup.component.scss',
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None
})
export class PromotorSignupComponent {
  documentTypes = [
    {
      label: 'Pan Card',
      value: 'Pan Card',
    },
    {
      label: 'Aadhar Card',
      value: 'Aadhar Card',
    },
    {
      label: 'Driving License',
      value: 'Driving License',
    },
  ];

  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {}

  onUpload(event: UploadEvent) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({
      severity: 'info',
      summary: 'File Uploaded',
      detail: '',
    });
  }
}
