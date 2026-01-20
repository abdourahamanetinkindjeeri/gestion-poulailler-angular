import { Component, OnInit } from '@angular/core';
import { Sidebar } from '../../composants/sidebar/sidebar';
import { Header } from '../../composants/header/header';
import { Content } from '../../composants/content/content';
import { Footer } from '../../composants/footer/footer';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Sidebar, Header, Content, Footer],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard implements OnInit {
  collapsed = false;
  sidebarOpen = false;
  isMobile = false;
  isDark = true;

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      this.sidebarOpen = false;
    }
  }

  toggleSidebar() {
    if (this.isMobile) {
      this.sidebarOpen = !this.sidebarOpen;
    } else {
      this.collapsed = !this.collapsed;
    }
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
  }
}
