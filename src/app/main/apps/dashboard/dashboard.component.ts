import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { ProjectDashboardService } from './project.service';
import { BehaviorSubject, Observable } from 'rxjs';
import * as shape from 'd3-shape';
import { DataSource } from '@angular/cdk/collections';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class DashboardComponent implements OnInit {

  constructor(
    private _fuseSidebarService: FuseSidebarService,
    private _projectDashboardService: ProjectDashboardService,
    private _fuseConfigService: FuseConfigService,
  ) { 
             // Configure the layout
   /**
      this._fuseConfigService.config = {
      layout: {
          navbar   : {
              hidden: true
          },
          toolbar  : {
              hidden: false
          },
          footer   : {
              hidden: false
          },
          sidepanel: {
              hidden: true
          }
      }
    
  };*/
  }

  ngOnInit() {
 
  }

  // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the sidebar
     *
     * @param name
     */
    toggleSidebar(name): void
    {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    }

}
