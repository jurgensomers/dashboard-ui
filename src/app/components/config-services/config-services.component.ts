import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from '../../services/service.service';
import { HostService } from '../../services/host.service';
import { ConfigService } from '../../models/config-service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ConfigServiceEditComponent } from '../config-service-edit/config-service-edit.component';

@Component({
  selector: 'app-config-services',
  templateUrl: './config-services.component.html',
  styleUrls: ['./config-services.component.css']
})
export class ConfigServicesComponent implements OnInit {

  public errorMessage:any;
  public infoMessage:any;
  public warningMessage:any;
  public services:ConfigService[]

  constructor(private _serviceService:ServiceService, private _modalService: NgbModal) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.errorMessage = null;
    
    this._serviceService.getConfig().subscribe(
       s => { this.services = s;} ,
       error =>  this.errorMessage = <any>error.message);
  }

   beginEdit(item:ConfigService) {
    this._serviceService.setParameter(item);
    this._modalService.open(ConfigServiceEditComponent, { size: 'lg'}).result.then((result) => {      
    }, (reason) => {
    });
  }

  save(){
    this.errorMessage = null;
    this.warningMessage = null;
    this.infoMessage = null;

    this._serviceService.setConfig(this.services).subscribe(
      s => {
        this.loadAll();
        this.warningMessage="Changes will be applied when server has loaded new states";
        this.infoMessage="Changes are saved";
      },
      error =>  this.errorMessage = <any>error.message);
  }

  add(){
    this._serviceService.setParameter(null);
    this._modalService.open(ConfigServiceEditComponent,{ size: 'lg'}).result.then((result) => {
      if(result == "save")
      {
        let item = this._serviceService.getParameter();
        this.services.push(item);
      }
    }, (reason) => {
    });
  }

  delete(item:ConfigService){
    let index = this.services.indexOf(item);
    this.services.splice(index,1);
  }

}
