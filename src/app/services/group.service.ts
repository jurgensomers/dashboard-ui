import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { BrowserModule} from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { settings } from '../app.settings';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ConfigGroup } from '../models/config-group';

@Injectable()
export class GroupService {

 private modalParameter:ConfigGroup;

   constructor(private http:HttpClient) { 

  }

  setParameter(item:ConfigGroup){
      this.modalParameter = item;
  }

  getParameter() : ConfigGroup{
    return this.modalParameter;
  }

  getAll() : Observable<String[]> {
    return this.http.get<String[]>(settings.serviceEndpoint + '/groups/all');
  }

   getConfig() : Observable<ConfigGroup[]> {
    return this.http.get<ConfigGroup[]>(settings.serviceEndpoint + '/groups/getConfig');
  }

  setConfig(hosts:ConfigGroup[]) {
    return this.http.put(settings.serviceEndpoint + '/groups/setConfig', hosts);
  }


}
