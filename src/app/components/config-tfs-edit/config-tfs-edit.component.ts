import { Component, OnInit, Input } from '@angular/core';
import { ConfigTfs } from '../../models/config-tfs'; 
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; 
import { TfsService } from '../../services/tfs.service';

@Component({
  selector: 'app-config-tfs-edit',
  templateUrl: './config-tfs-edit.component.html',
  styleUrls: ['./config-tfs-edit.component.scss']
})
export class ConfigTfsEditComponent implements OnInit {

  public currentItem:ConfigTfs;
  public errorMessage:any;
  public definitions:String[];

  constructor( private _tfsService:TfsService,  public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.currentItem = this._tfsService.getParameter();
    this.currentItem = JSON.parse(JSON.stringify(this.currentItem));

    if(this.currentItem == null){
      this.currentItem = new ConfigTfs();
    }

     this.errorMessage = null;    
    this._tfsService.getBuildDefinitions().subscribe(
    s => { this.definitions = s;} ,
    error =>  this.errorMessage = <any>error.message);
  }

  save(){    
    var original = this._tfsService.getParameter();
    if(original == null || original == undefined){
      original = this.currentItem;
    }
    else{
      Object.assign(original, this.currentItem);
    }
    this._tfsService.setParameter(original);
    
    this.activeModal.close('save');
  }

  close(){
    this.activeModal.close('close');
  }
}
