import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import {MenuComponent} from '../../composants/menu/menu';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, NgClass, MenuComponent], // <-- ajoute NgIf ici
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard {
  showSidebar: boolean = true;

  toggleSidebar() {
    console.log('toggle sidebar');
    this.showSidebar = !this.showSidebar;
  }
}
