import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TfsService } from '../../services/tfs.service';
import { ConfigTfs } from '../../models/config-tfs';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ConfigTfsEditComponent } from '../config-tfs-edit/config-tfs-edit.component';

@Component({
  selector: 'app-config-tfs',
  templateUrl: './config-tfs.component.html',
  styleUrls: ['./config-tfs.component.scss']
})
export class ConfigTfsComponent implements OnInit {

 
  public errorMessage:any;
  public infoMessage:any;
  public warningMessage:any;
  public builds:ConfigTfs[]

  constructor(private _tfsService:TfsService, private _modalService: NgbModal) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {    
    this.errorMessage = null;

    this._tfsService.getConfig().subscribe(
       s => { this.builds = s;} ,
       error => this.errorMessage = <any>error.message );
  }

  beginEdit(item:ConfigTfs) {
    this._tfsService.setParameter(item);
     this._modalService.open(ConfigTfsEditComponent).result.then((result) => {      
    }, (reason) => {});
  }

  save(){
    this.errorMessage = null;
    this.warningMessage = null;
    this.infoMessage = null;
    
    this._tfsService.setConfig(this.builds).subscribe(
      s => { 
        this.loadAll();
        this.warningMessage="Changes will be applied when server has loaded new states";
        this.infoMessage="Changes are saved"; 
      },
      error => this.errorMessage = <any>error.message);
  }

  add(){
    this._tfsService.setParameter(null);
    this._modalService.open(ConfigTfsEditComponent).result.then((result) => {
      console.log(result);
      if(result == "save")
      {
        let item = this._tfsService.getParameter();
        this.builds.push(item);
      }
    }, (reason) => {});
  }


  delete(item:ConfigTfs){
    let index = this.builds.indexOf(item);
    this.builds.splice(index,1);
  }

}
