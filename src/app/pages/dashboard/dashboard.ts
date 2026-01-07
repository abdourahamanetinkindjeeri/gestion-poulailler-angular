import { Component } from '@angular/core';
import {Sidebar} from '../../composants/sidebar/sidebar';
import {Header} from '../../composants/header/header';
import {Content} from '../../composants/content/content';
import {Footer} from '../../composants/footer/footer';

@Component({
  selector: 'app-dashboard',
  imports: [
    Sidebar,
    Header,
    Content,
    Footer
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  sidebarOpen = true; // true = ouvert, false = réduit
  isDark = true;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    if (this.isDark) {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }
}
