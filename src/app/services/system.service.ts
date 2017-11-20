import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { BrowserModule} from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { settings } from '../app.settings';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { SystemInfo } from '../models/system-info';
import { Endpoint } from '../models/endpoint';

@Injectable()
export class SystemService {

  constructor(private http:HttpClient) { }

  getSystemInfo(): Observable<SystemInfo>{
    var systemInfo = this.http.get<SystemInfo>(settings.serviceEndpoint + '/system/info');
    return systemInfo;
  }

  getEndpoints(): Observable<Endpoint[]>{
    var endpoints = this.http.get<Endpoint[]>(settings.serviceEndpoint + '/system/endpoints');
    return endpoints;
  }
}
