import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    redirectTo: 'registro',
    pathMatch: 'full'
  },
  {
    path: 'userlist',
    redirectTo: 'userlist',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio/1',
    redirectTo: 'inicio/1',
    pathMatch: 'full'
  },
  {
    path: 'inicio/2',
    redirectTo: 'inicio/2',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
  },
  
  {
    path: 'ub-picks',
    loadChildren: () => import('./ub-picks/ub-picks.module').then( m => m.UbPICKSPageModule)
  },

  {
    path: 'inicio',
    children: [
      {
        path:"",
        loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)

      },
      {
        path: ":pickId",
        loadChildren: ()=> import('./inicio/detalle/detalle.module').then(m =>m.DetallePageModule)

      }

    ]
  },
  {
    path: 'userlist',
    loadChildren: () => import('./userlist/userlist.module').then( m => m.UserlistPageModule)
  },
  {
    path: 'e404',
    loadChildren: () => import('./e404/e404.module').then( m => m.E404PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
