import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [

  
{
    path        : 'apps',
    loadChildren: './main/apps/apps.module#AppsModule'
},
/*  aqui é a página onde o sistema deve inicializar */
{
    path      : '**',
    redirectTo: 'apps/dashboard'
}
];




@NgModule({
  imports: [
      RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }