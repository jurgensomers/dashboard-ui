import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../services/system.service';
import { Observable } from 'rxjs';
import { SystemInfo } from '../../models/system-info';
import { settings } from '../../app.settings';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-system-info',
  templateUrl: './system-info.component.html',
  styleUrls: ['./system-info.component.scss']
})
export class SystemInfoComponent implements OnInit {

  public info:SystemInfo;
  public errorMessage:any;

  constructor(private _systemService:SystemService, public activeModal: NgbActiveModal) { 
    this.info = new SystemInfo();
  }

  ngOnInit() {
    this.load();
  }

  load(){
     this._systemService.getSystemInfo().subscribe(
      s =>{ this.info = s;
       this.info.clientSleep = settings.sleepFrom + " until " + settings.sleepUntil;
       this.info.clientRefreshInterval = settings.refreshInterval/60000 + " minute(s)";
       if (settings.autoNavigate)
        this.info.autoNavigation = "on";
       else 
        this.info.autoNavigation = "off";
       this.info.autoNavigationInterval = settings.autoNavigateInterval/60000 + " minute(s)";
      },
      error =>  this.errorMessage = <any>error.message);
  }

  close(){
    this.activeModal.close('close');
  }

  toggleAutoNavigation(){
    settings.autoNavigate = !settings.autoNavigate;

    if (settings.autoNavigate)
      this.info.autoNavigation = "on";
    else 
      this.info.autoNavigation = "off";
  }
}
