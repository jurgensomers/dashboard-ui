import { Component, OnInit, Input } from '@angular/core';
import { ConfigHost } from '../../models/config-host';
import { HostService } from '../../services/host.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-config-host-edit',
  templateUrl: './config-host-edit.component.html',
  styleUrls: ['./config-host-edit.component.scss']
})
export class ConfigHostEditComponent implements OnInit {
  
  public currentItem:ConfigHost;

  constructor(private _hostService:HostService, public activeModal: NgbActiveModal) { }

  ngOnInit() {
      this.currentItem = this._hostService.getParameter();
      this.currentItem = JSON.parse(JSON.stringify(this.currentItem));
       if(this.currentItem == null){
         this.currentItem = new ConfigHost();
       }
  }

  save(){
    var original = this._hostService.getParameter();
   if(original == null || original == undefined){
      original = this.currentItem;
    }
    else{
      Object.assign(original, this.currentItem);
    }
    this._hostService.setParameter(original);
    this.activeModal.close('save');
  }

  close(){
    this.activeModal.close('close');
  }

}
