import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule , Routes} from '../../../../../node_modules/@angular/router';
import { MatButtonModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatSelectModule, MatTableModule, MatTabsModule } from '../../../../../node_modules/@angular/material';
import { NgxChartsModule } from '../../../../../node_modules/@swimlane/ngx-charts';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseSidebarModule, FuseWidgetModule } from '@fuse/components';
import { ProjectDashboardService } from './project.service';

const routes: Routes = [
  {
      path     : '**',
      component: DashboardComponent,
      resolve  : {
          data: ProjectDashboardService
      }
  }
];

@NgModule({
  declarations: [
      DashboardComponent
  ],
  imports     : [
      RouterModule.forChild(routes),

      MatButtonModule,
      MatDividerModule,
      MatFormFieldModule,
      MatIconModule,
      MatMenuModule,
      MatSelectModule,
      MatTableModule,
      MatTabsModule,

      NgxChartsModule,

      FuseSharedModule,
      FuseSidebarModule,
      FuseWidgetModule
  ],
  providers   : [
      ProjectDashboardService
  ]
})
export class DashboardModule { }
