import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';  // <-- ajoute NgIf

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, NgClass, NgIf], // <-- ajoute NgIf ici
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
