import { Component, Input } from '@angular/core';
import {NgIf, NgFor, NgClass} from '@angular/common';
import {Menu} from './menu';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class Sidebar {
  @Input() collapsed = false;

  menuList: Menu[] = [
    {
      id: '1',
      titre: 'Dashboard',
      icon: 'fas fa-home',
      url: 'dashboard',
      active: true
    },
    {
      id: '2',
      titre: 'Enclos',
      icon: 'fas fa-box',
      open: false,
      sousMenu: [
        { id: '2-1', titre: 'Ajouter enclos', icon: 'fas fa-plus', url: 'enclos/add-enclos' },
        { id: '2-2', titre: 'Liste produits', icon: 'fas fa-list', url: 'enclos' }
      ]
    },
    {
      id: '3',
      titre: 'Stock',
      icon: 'fas fa-warehouse',
      url: '/stock',
      sousMenu: [
        { id: '2-1', titre: 'Ajouter enclos', icon: 'fas fa-plus', url: 'enclos/add-enclos' },
        { id: '2-2', titre: 'Liste produits', icon: 'fas fa-list', url: 'enclos' }
      ]
    },
    {
      id: '4',
      titre: 'Commandes',
      icon: 'fas fa-shopping-cart',
      url: '/commandes'
    },
    {
      id: '5',
      titre: 'ventes',
      icon: 'fas fa-shopping-cart',
      url: '/ventes'
    }
  ];

  toggleMenu(menu: Menu) {
    menu.open = !menu.open;
  }


  private lastSelectedMenu: Menu | undefined;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(menu: Menu): void {
    if (this.lastSelectedMenu) {
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.lastSelectedMenu = menu;
    this.router.navigate([menu.url]);
  }
}
