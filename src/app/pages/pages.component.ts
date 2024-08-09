import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from '../shared/topbar/topbar.component';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [RouterModule, CommonModule, TopbarComponent],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {

}
