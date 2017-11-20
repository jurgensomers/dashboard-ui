import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { BrowserModule} from '@angular/platform-browser';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { settings } from '../app.settings';
import { TfsResults } from '../models/tfs-results';
import { ConfigTfs } from '../models/config-tfs';

@Injectable()
export class TfsService {

  private modalParameter:ConfigTfs;

  constructor(private http:HttpClient) { }

 getAll() : Observable<TfsResults> {
    return this.http.get<TfsResults>(settings.serviceEndpoint + '/tfs/all');
  }

  getOwner(owner:String) : Observable<TfsResults> {
    return this.http.get<TfsResults>(settings.serviceEndpoint + '/tfs/owner?owner=' + owner);
  }

  getBuild(build:String) : Observable<TfsResults> {    
    return this.http.get<TfsResults>(settings.serviceEndpoint + '/tfs/build?build=' + build);
  }

   getBuildDefinitions() : Observable<String[]> {    
    return this.http.get<String[]>(settings.serviceEndpoint + '/tfs/definitions');
  }

  getConfig() : Observable<ConfigTfs[]> {
    return this.http.get<ConfigTfs[]>(settings.serviceEndpoint + '/tfs/getConfig');
  }

  setConfig(hosts:ConfigTfs[]) {
    return this.http.put(settings.serviceEndpoint + '/tfs/setConfig', hosts);
  }

  setParameter(item:ConfigTfs){
      this.modalParameter = item;
  }

  getParameter() : ConfigTfs{
    return this.modalParameter;
  }
}
