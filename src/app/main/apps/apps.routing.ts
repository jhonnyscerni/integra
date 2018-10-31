import { WoocommerceListPublicadoComponent } from './woocommerce/woocommerce-list-publicado/woocommerce-list-publicado.component';
import { CatalogoComponent } from './produtos/catalogo/catalogo.component';
import { LojaListComponent } from './lojas/loja-list/loja-list.component';
import { LojaEditComponent } from './lojas/loja-edit/loja-edit.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

    
    {
        path        : 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'lojas', children: [
        { path: 'edit', component: LojaEditComponent },
        { path: 'list', component: LojaListComponent }
    ]
    },
    {
        path: 'produtos', children: [
        { path: 'catalogo', component: CatalogoComponent }
    ]
    }

    ,
    {
        path: 'woocommerce', children: [
        { path: 'woocommerce-list-publicado', component: WoocommerceListPublicadoComponent }
    ]
    }

];

export const AppsRoutes = RouterModule.forChild(routes);
