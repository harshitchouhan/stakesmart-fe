import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [BadgeModule, RouterModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {}
