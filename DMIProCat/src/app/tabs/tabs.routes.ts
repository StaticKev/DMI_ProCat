import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then(m => m.HomePage),
      },
      {
        path: 'shop',
        loadComponent: () =>
          import('../shop/shop.page').then(m => m.ShopPage),
      },
      {
        path: 'history',
        loadComponent: () =>
          import('../history-transaction/history-transaction.page')
            .then(m => m.HistoryTransactionPage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../profile/profile.page').then(m => m.ProfilePage),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
];
