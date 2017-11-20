import { Component, OnInit, Input } from '@angular/core';
import { ConfigGroup } from '../../models/config-group';
import { ServiceService } from '../../services/service.service';
import { HostService } from '../../services/host.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-config-group-edit',
  templateUrl: './config-group-edit.component.html',
  styleUrls: ['./config-group-edit.component.scss']
})
export class ConfigGroupEditComponent implements OnInit {

  public currentItem:ConfigGroup;
  public errorMessage:any;
  public selectedService:String;
  public services:String[];


  constructor(private _serviceService:ServiceService, private _hostService:HostService, private _groupService:GroupService,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.currentItem = this._groupService.getParameter();
    this.currentItem = JSON.parse(JSON.stringify(this.currentItem));
    if(this.currentItem == null){
      this.currentItem = new ConfigGroup();
      this.currentItem.services = [];
    }

    this.errorMessage = null;    
    this._serviceService.getAll().subscribe(
    s => { this.services = s;} ,
    error =>  this.errorMessage = <any>error.message);
  }
  
  addService(){
    if(this.selectedService != null)
      this.currentItem.services.push(this.selectedService);
  }

  deleteService(item:String){
     let index = this.currentItem.services.indexOf(item);
    this.currentItem.services.splice(index,1);
  }

  save(){    
    var original = this._groupService.getParameter();
    if(original == null || original == undefined){
      original = this.currentItem;
    }
    else{
      Object.assign(original, this.currentItem);
    }
    this._groupService.setParameter(original);
    
    this.activeModal.close('save');
  }

  close(){
    this.activeModal.close('close');
  }
}
