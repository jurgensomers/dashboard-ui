import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { routing } from "./app.routing";
import { TabModule } from 'angular-tabs-component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { StatusService } from './services/status.service';
import { OwnerService } from './services/owner.service';
import { GroupService } from './services/group.service';
import { EnvironmentService } from './services/environment.service';
import { HostService } from './services/host.service';
import { ServiceService } from './services/service.service';
import { TimerService } from './services/timer.service';
import { SystemService } from './services/system.service';
import { HistoryService } from './services/history.service';
import { TfsService } from './services/tfs.service';

import { OrderByPipe } from './pipes/order-by.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AllResultComponent } from './components/all-result/all-result.component';

import { OwnerResultsComponent } from './components/owner-results/owner-results.component';
import { OwnerResultComponent } from './components/owner-result/owner-result.component';
import { OwnerGroupComponent } from './components/owner-group/owner-group.component'

import { GroupResultComponent } from './components/group-result/group-result.component';
import { GroupResultsComponent } from './components/group-results/group-results.component';

import { EnvironmentResultsComponent } from './components/environment-results/environment-results.component';
import { EnvironmentGroupComponent } from './components/environment-group/environment-group.component';
import { EnvironmentResultComponent } from './components/environment-result/environment-result.component';

import { ConfigHostsComponent } from './components/config-hosts/config-hosts.component';
import { ConfigGroupsComponent } from './components/config-groups/config-groups.component';
import { ConfigServicesComponent } from './components/config-services/config-services.component';
import { ConfigComponent } from './components/config/config.component';
import { ConfigHostEditComponent } from './components/config-host-edit/config-host-edit.component';
import { ConfigGroupEditComponent } from './components/config-group-edit/config-group-edit.component';
import { ConfigServiceEditComponent } from './components/config-service-edit/config-service-edit.component';
import { ErrorDisplayComponent } from './components/error-display/error-display.component';
import { InfoDisplayComponent } from './components/info-display/info-display.component';
import { WarningDisplayComponent } from './components/warning-display/warning-display.component';
import { SystemInfoComponent } from './components/system-info/system-info.component';
import { EndpointsComponent } from './components/endpoints/endpoints.component';
import { HistorySelectComponent } from './components/history-select/history-select.component';
import { HeaderInfoComponent } from './components/header-info/header-info.component';
import { HistoryComponent } from './components/history/history.component';
import { HistoryDetailComponent } from './components/history-detail/history-detail.component';
import { TfsAllComponent } from './components/tfs-all/tfs-all.component';
import { TfsOwnerComponent } from './components/tfs-owner/tfs-owner.component';
import { ConfigTfsComponent } from './components/config-tfs/config-tfs.component';
import { ConfigTfsEditComponent } from './components/config-tfs-edit/config-tfs-edit.component';



@NgModule({
  declarations: [
    OrderByPipe,
    AppComponent,
    HomeComponent,        
    AllResultComponent,
    OwnerResultsComponent,
    OwnerResultComponent,
    OwnerGroupComponent,
    GroupResultComponent,
    GroupResultsComponent,
    EnvironmentResultsComponent,
    EnvironmentGroupComponent,
    EnvironmentResultComponent,
    ConfigHostsComponent,
    ConfigGroupsComponent,
    ConfigServicesComponent,
    ConfigComponent,
    ConfigHostEditComponent,
    ConfigGroupEditComponent,
    ConfigServiceEditComponent,
    ErrorDisplayComponent,
    InfoDisplayComponent,
    WarningDisplayComponent,
    SystemInfoComponent,
    EndpointsComponent,
    HistorySelectComponent,
    HeaderInfoComponent,
    HistoryComponent,
    HistoryDetailComponent,
    TfsAllComponent,
    TfsOwnerComponent,
    ConfigTfsComponent,
    ConfigTfsEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TabModule,
    NgbModule.forRoot(),
    routing
  ],
  providers: [StatusService, OwnerService, GroupService, EnvironmentService, HostService, ServiceService, TimerService, SystemService, HistoryService, TfsService],
  bootstrap: [AppComponent],
  entryComponents:[
    ConfigGroupEditComponent, ConfigHostEditComponent, ConfigServiceEditComponent, SystemInfoComponent, HistorySelectComponent, ConfigTfsEditComponent
  ]
})
export class AppModule { }
