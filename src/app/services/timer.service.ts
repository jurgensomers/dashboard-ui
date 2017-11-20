import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { settings } from '../app.settings';
import { Router } from "@angular/router";

@Injectable()
export class TimerService {


  constructor(private router:Router ) { }

  start():Observable<number>{
     let timer = Observable.timer(settings.refreshInterval,settings.refreshInterval);
     return timer;
  }

  timerActive():Boolean {
    var regExp = /(\d{1,2})\:(\d{1,2})\:(\d{1,2})/;
    var today = new Date();
    var now = today.toLocaleTimeString();
    var nowInt = parseInt(now.replace(regExp, "$1$2$3"));
    var startInt = parseInt(settings.sleepFrom.replace(regExp, "$1$2$3"));
    var endInt =  parseInt(settings.sleepUntil.replace(regExp, "$1$2$3")) 
    if( nowInt > startInt && nowInt < endInt ){
      return false;
    } 
    else{
      return true;
    }
  }


  autoNavigateTfs(owner:String){
    if(settings.autoNavigate){
        let timer = Observable.timer(settings.autoNavigateInterval).subscribe(t => {          
          let url = this.router.createUrlTree(['tfs', owner]);
          this.router.navigateByUrl(url);
        });
      }
  }

  autoNavigateOwner(owner:String){
    if(settings.autoNavigate){
      let timer = Observable.timer(settings.autoNavigateInterval).subscribe(t => {          
        let url = this.router.createUrlTree(['status','owners', owner]);
        this.router.navigateByUrl(url);
      });
    }
  }

}
