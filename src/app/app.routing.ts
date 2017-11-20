import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { AllResultComponent } from './components/all-result/all-result.component';
import { HistoryComponent } from './components/history/history.component';
import { HistoryDetailComponent } from './components/history-detail/history-detail.component';

import { OwnerResultsComponent } from './components/owner-results/owner-results.component';
import { GroupResultsComponent } from './components/group-results/group-results.component';
import { EnvironmentResultsComponent } from './components/environment-results/environment-results.component';

import { SystemInfoComponent } from './components/system-info/system-info.component';
import { ConfigComponent } from './components/config/config.component';
import { ConfigHostsComponent } from './components/config-hosts/config-hosts.component';
import { ConfigGroupsComponent } from './components/config-groups/config-groups.component';
import { ConfigServicesComponent } from './components/config-services/config-services.component';
import { ConfigTfsComponent } from './components/config-tfs/config-tfs.component';
import { EndpointsComponent } from './components/endpoints/endpoints.component';

import { TfsAllComponent } from './components/tfs-all/tfs-all.component';
import { TfsOwnerComponent } from './components/tfs-owner/tfs-owner.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path:"home", component:HomeComponent },
    { path:"status/all", component:AllResultComponent },
    { path:"status/owners", component:OwnerResultsComponent },
    { path:"status/owners/:name", component:OwnerResultsComponent },
    { path:"status/groups", component:GroupResultsComponent },
    { path:"status/groups/:name", component:GroupResultsComponent },
    { path:"status/environments", component:EnvironmentResultsComponent },
    { path:"status/environments/:name", component:EnvironmentResultsComponent },
    { path:"tfs", component:TfsAllComponent,
        children:[
            { path:":owner", component: TfsOwnerComponent }
        ]
    },
    { path:"history", component:HistoryComponent },
     { path:"history/:environment/:name", component:HistoryDetailComponent },
    // { path:"history/groups/:name/:time", component:GroupResultsComponent },
    // { path:"history/environments/:name/:time", component:GroupResultsComponent },
    { path:"config", component:ConfigComponent,
    children: [
        { path:"systeminfo", component: SystemInfoComponent },
        { path:"hosts", component: ConfigHostsComponent },
        { path:"groups", component: ConfigGroupsComponent },
        { path:"services", component: ConfigServicesComponent },
        { path:"endpoints", component: EndpointsComponent },
        { path:"tfs", component: ConfigTfsComponent }
    ] }    
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);