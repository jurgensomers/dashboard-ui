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
import { HistoryResult } from '../models/history-result';

@Injectable()
export class HistoryService {

  constructor(private http:HttpClient) { }

  list() : Observable<String[]> {
    return this.http.get<String[]>(settings.serviceEndpoint + '/history/list');
  }

  getAll(date:String) : Observable<GenericResults> {
    return this.http.get<GenericResults>(settings.serviceEndpoint + '/history/all?date=' + date);
  }

  getOwners(date:String) : Observable<OwnerResults> {
    return this.http.get<OwnerResults>(settings.serviceEndpoint + '/history/owners?date=' + date);
  }

  getOwner(owner:String,date:String) : Observable<OwnerResults> {    
    return this.http.get<OwnerResults>(settings.serviceEndpoint + '/history/owner/' + owner + "?date=" + date);
  }

  getGroups(date:String) : Observable<GroupResults>{
    return this.http.get<GroupResults>(settings.serviceEndpoint + '/history/groups?date=' + date);
  }

  getGroup(group:String, date:String) : Observable<GroupResults>{
    return this.http.get<GroupResults>(settings.serviceEndpoint + '/history/group/' + group + "?date=" + date);
  }

  getEnvironments (date:String): Observable<EnvironmentResults>{
    return this.http.get<EnvironmentResults>(settings.serviceEndpoint + '/history/environments?date=' + date);
  }

  getEnvironment (environment:String, date:String) : Observable<EnvironmentResults>{
    return this.http.get<EnvironmentResults>(settings.serviceEndpoint + '/history/environment/' + environment + "?date=" + date);
  }

  detail(environment:String, name:String) : Observable<HistoryResult[]>{
     return this.http.get<HistoryResult[]>(settings.serviceEndpoint + '/history/service?name=' + name + "&environment=" + environment);
  }
}
