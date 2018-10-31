import { ProdutoService } from './../../services/produto.service';
import { AuthService } from './../../services/auth.service';
import { CatalogoComponent } from './produtos/catalogo/catalogo.component';
import { LojaListComponent } from './lojas/loja-list/loja-list.component';
import { AppsRoutes } from './apps.routing';
import { NgModule } from '@angular/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseDemoModule, FuseSidebarModule } from '@fuse/components';
import { CommonModule } from '../../../../node_modules/@angular/common';
import { MatIconModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatTableModule, MatCheckboxModule, MatPaginatorModule, MatListModule } from '../../../../node_modules/@angular/material';
import { LojaEditComponent } from './lojas/loja-edit/loja-edit.component';
import { HttpModule } from '@angular/http';


@NgModule({
    declarations: [
        LojaEditComponent,
        LojaListComponent,
        CatalogoComponent
    ],
    imports     : [
        AppsRoutes,
        FuseSharedModule,
        CommonModule,
        MatIconModule, 
        HttpModule,


        //COMPONENTS
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatSnackBarModule,
        MatTableModule,
        MatCheckboxModule,
        MatPaginatorModule,
        MatListModule,
        

        // SIDEBAR E DEMO CONTENT
        FuseSidebarModule,
        FuseDemoModule,
      
    ],
     providers: [
         AuthService,
        ProdutoService,
    ],
})
export class AppsModule
{
}