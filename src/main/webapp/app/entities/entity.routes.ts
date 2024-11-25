import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'villesApp.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'ville',
    data: { pageTitle: 'villesApp.ville.home.title' },
    loadChildren: () => import('./ville/ville.routes'),
  },
  {
    path: 'region',
    data: { pageTitle: 'villesApp.region.home.title' },
    loadChildren: () => import('./region/region.routes'),
  },
  {
    path: 'joueur',
    data: { pageTitle: 'villesApp.joueur.home.title' },
    loadChildren: () => import('./joueur/joueur.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
