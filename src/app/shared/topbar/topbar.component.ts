import { Component } from '@angular/core';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [BadgeModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {}
