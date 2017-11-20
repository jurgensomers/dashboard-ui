import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { BrowserModule} from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { settings } from '../app.settings';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OwnerService {

   constructor(private http:HttpClient) { 

  }

   getAll() : Observable<String[]> {
    return this.http.get<String[]>(settings.serviceEndpoint + '/owners/all');
  }

   private handleError(error : any){
    console.error(error.message ||error );
    return Observable.throw(error.message ||error);
  }

}
