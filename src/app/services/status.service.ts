import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { BrowserModule} from '@angular/platform-browser';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { settings } from '../app.settings';
import { OwnerResults } from '../models/owner-results';
import { GenericResults} from '../models/generic-results';
import { GroupResults } from '../models/group-results';
import { EnvironmentResults } from '../models/environment-results';
import { SystemInfo } from '../models/system-info';

@Injectable()
export class StatusService  {

  constructor(private http:HttpClient) { 

  }

   getAll() : Observable<GenericResults> {
    return this.http.get<GenericResults>(settings.serviceEndpoint + '/status/all');
  }

  getOwners() : Observable<OwnerResults> {
    return this.http.get<OwnerResults>(settings.serviceEndpoint + '/status/owners');
  }

  getOwner(owner:String) : Observable<OwnerResults> {    
    return this.http.get<OwnerResults>(settings.serviceEndpoint + '/status/owner/' + owner);
  }

  getGroups() : Observable<GroupResults>{
    return this.http.get<GroupResults>(settings.serviceEndpoint + '/status/groups');
  }

  getGroup(group:String) : Observable<GroupResults>{
    return this.http.get<GroupResults>(settings.serviceEndpoint + '/status/group/' + group);
  }

  getEnvironments (): Observable<EnvironmentResults>{
    return this.http.get<EnvironmentResults>(settings.serviceEndpoint + '/status/environments');
  }

  getEnvironment (environment:String) : Observable<EnvironmentResults>{
    return this.http.get<EnvironmentResults>(settings.serviceEndpoint + '/status/environment/' + environment);
  }



}
