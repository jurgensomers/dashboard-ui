import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { BrowserModule} from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { settings } from '../app.settings';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ConfigService } from '../models/config-service';

@Injectable()
export class ServiceService {

  private modalParameter:ConfigService;

  constructor(private http:HttpClient) { 

  }

  getAll() : Observable<String[]> {
    return this.http.get<String[]>(settings.serviceEndpoint + '/services/all');
  }

  getConfig() : Observable<ConfigService[]> {
    return this.http.get<ConfigService[]>(settings.serviceEndpoint + '/services/getConfig');
  }

  getBindings(bindingType:String) : Observable<String[]> {
    return this.http.get<String[]>(settings.serviceEndpoint + '/services/getbindings?bindingType=' + bindingType);
  }

  getBindingTypes() : Observable<String[]> {
    return this.http.get<String[]>(settings.serviceEndpoint + '/services/getbindingtypes');
  }

  setConfig(hosts:ConfigService[]) {
    return this.http.put(settings.serviceEndpoint + '/services/setConfig', hosts);
  } 

  setParameter(item:ConfigService){   
      this.modalParameter = item;
  }

  getParameter() : ConfigService{
    return this.modalParameter;
  }

}
