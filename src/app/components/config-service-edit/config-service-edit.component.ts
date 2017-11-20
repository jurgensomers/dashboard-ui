import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { HostService } from '../../services/host.service';
import { ConfigService } from '../../models/config-service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-config-service-edit',
  templateUrl: './config-service-edit.component.html',
  styleUrls: ['./config-service-edit.component.scss']
})
export class ConfigServiceEditComponent implements OnInit {

  public errorMessage:any;
  public services:ConfigService[];
  @Input() public currentItem:ConfigService;
  public hosts:String[];
  public bindings:String[];
  public bindingTypes:String[];

  constructor(private _hostService:HostService, private _serviceService:ServiceService, public activeModal: NgbActiveModal) {
    
    
   }

  ngOnInit() {
    this.errorMessage = null;
    
    this.currentItem = this._serviceService.getParameter();
    this.currentItem = JSON.parse(JSON.stringify(this.currentItem));
    if(this.currentItem == null){
      this.currentItem = new ConfigService();
    }

    this._hostService.getAll().subscribe(
       s => { this.hosts = s;} ,
       error =>  this.errorMessage = <any>error.message);
    
    this._serviceService.getBindingTypes().subscribe(
       s => { this.bindingTypes = s;} ,
       error =>  this.errorMessage = <any>error.message);

    this.updateBindings();
  }

  updateBindings(){
    this.errorMessage = null;
    
    if(this.currentItem.bindingtype != undefined)
    {
      this._serviceService.getBindings(this.currentItem.bindingtype).subscribe(
        s => { this.bindings = s;} ,
        error =>  this.errorMessage = <any>error.message);
    }
  }

  save(){
    var original = this._serviceService.getParameter();
   if(original == null || original == undefined){
      original = this.currentItem;
    }
    else{
      Object.assign(original, this.currentItem);
    }
    this._serviceService.setParameter(original);
    this.activeModal.close('save');
  }

  close(){
    this.activeModal.close('close');
  }
}
