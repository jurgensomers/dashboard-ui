import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { BrowserModule} from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { settings } from '../app.settings';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ConfigHost } from '../models/config-host';

@Injectable()
export class HostService {

  private modalParameter:ConfigHost;

  constructor(private http:HttpClient) { 

  }

  getAll() : Observable<String[]> {
    return this.http.get<String[]>(settings.serviceEndpoint + '/hosts/all');
  }

  getConfig() : Observable<ConfigHost[]> {
    return this.http.get<ConfigHost[]>(settings.serviceEndpoint + '/hosts/getConfig');
  }

  setConfig(hosts:ConfigHost[]) {
    return this.http.put(settings.serviceEndpoint + '/hosts/setConfig', hosts);
  }

   private handleError(error : any) {
     console.error(error.message ||error );
     return Observable.throw(error.message ||error);
  }

  setParameter(item:ConfigHost){
      this.modalParameter = item;
  }

  getParameter() : ConfigHost{
    return this.modalParameter;
  }

}
