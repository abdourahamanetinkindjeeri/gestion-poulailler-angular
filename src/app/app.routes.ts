import { Routes } from '@angular/router';
import { Signup } from './pages/signup/signup';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Enclos } from './pages/enclos/enclos/enclos';
import {AddEnclos} from './pages/enclos/add-enclos/add-enclos';

export const routes: Routes = [
  {
    path: 'signup',
    component: Signup,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: '',
    component: Dashboard,
    children: [
      {
        path: 'enclos',
        component: Enclos
      },
      {
        path: 'enclos/add-enclos',
        component: AddEnclos
      },
      // tu peux ajouter d’autres pages ici
      // { path: 'stock', component: Stock },
      // { path: 'commandes', component: Commandes }
    ]
  }
];
