import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HostService } from '../../services/host.service';
import { ConfigHost } from '../../models/config-host';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ConfigHostEditComponent } from '../config-host-edit/config-host-edit.component';

@Component({
  selector: 'app-config-hosts',
  templateUrl: './config-hosts.component.html',
  styleUrls: ['./config-hosts.component.css']
})

export class ConfigHostsComponent implements OnInit {

  public errorMessage:any;
  public infoMessage:any;
  public warningMessage:any;
  public hosts:ConfigHost[];

  constructor(private _hostService:HostService, private _modalService: NgbModal) { }

  ngOnInit() {   
    this.loadAll();
  }

  loadAll() {
    this.errorMessage = null;

    this._hostService.getConfig().subscribe(
       s => { this.hosts = s} ,
       error =>  this.errorMessage = <any>error.message);
  }

  beginEdit(item:ConfigHost) {
    this._hostService.setParameter(item);
     this._modalService.open(ConfigHostEditComponent).result.then((result) => {      
    }, (reason) => {});
  }


  save(){
    this.errorMessage = null;
    this.warningMessage = null;
    this.infoMessage = null;
    
    this._hostService.setConfig(this.hosts).subscribe(
      s => { 
        this.loadAll();
        this.warningMessage="Changes will be applied when server has loaded new states";
        this.infoMessage="Changes are saved";
      },
      error =>  this.errorMessage = <any>error.message);
  }

  add(){
    this._hostService.setParameter(null);
    this._modalService.open(ConfigHostEditComponent).result.then((result) => {
      console.log(result);
      if(result == "save")
      {
        let item = this._hostService.getParameter();
        this.hosts.push(item);
      }
    }, (reason) => {});
  }

  delete(item:ConfigHost){
    let index = this.hosts.indexOf(item);
    this.hosts.splice(index,1);
  }

}
