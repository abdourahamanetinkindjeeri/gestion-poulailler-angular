import { Component, Input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,        // important pour un composant indépendant
  imports: [NgIf, NgFor],  // ← ici on importe les directives utilisées
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class Sidebar {
  @Input() collapsed = false;

  navSections = [
    {
      title: 'Principal',
      items: [
        { icon: 'fas fa-home', label: 'Dashboard' },
        { icon: 'fas fa-box', label: 'Produits' },
        { icon: 'fas fa-warehouse', label: 'Stock' },
        { icon: 'fas fa-shopping-cart', label: 'Commandes' },
      ]
    },
    {
      title: 'Gestion',
      items: [
        { icon: 'fas fa-users', label: 'Clients' },
        { icon: 'fas fa-truck', label: 'Fournisseurs' },
        { icon: 'fas fa-chart-line', label: 'Statistiques' },
      ]
    },
    {
      title: 'Paramètres',
      items: [
        { icon: 'fas fa-cog', label: 'Paramètres' },
        { icon: 'fas fa-question-circle', label: 'Aide' },
      ]
    }
  ];
}
