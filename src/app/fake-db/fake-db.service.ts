import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ProjectDashboardDb } from 'app/fake-db/dashboard-project';
import { AnalyticsDashboardDb } from 'app/fake-db/dashboard-analytics';
import { QuickPanelFakeDb } from 'app/fake-db/quick-panel';


export class FakeDbService implements InMemoryDbService
{
    createDb(): any
    {
        return {
            // Dashboards
            'project-dashboard-projects' : ProjectDashboardDb.projects,
            'project-dashboard-widgets'  : ProjectDashboardDb.widgets,
            'analytics-dashboard-widgets': AnalyticsDashboardDb.widgets,

            // Quick Panel
            'quick-panel-notes' : QuickPanelFakeDb.notes,
            'quick-panel-events': QuickPanelFakeDb.events

        };
    }
}
