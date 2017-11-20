import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupService } from '../../services/group.service';
import { ConfigGroup } from '../../models/config-group';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ConfigGroupEditComponent } from '../config-group-edit/config-group-edit.component';

@Component({
  selector: 'app-config-groups',
  templateUrl: './config-groups.component.html',
  styleUrls: ['./config-groups.component.css']
})
export class ConfigGroupsComponent implements OnInit {

  public errorMessage:any;
  public infoMessage:any;
  public warningMessage:any;
  public groups:ConfigGroup[]
 
  constructor(private _groupService:GroupService, private _modalService: NgbModal) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {    
    this.errorMessage = null;

    this._groupService.getConfig().subscribe(
       s => { this.groups = s;} ,
       error => this.errorMessage = <any>error.message );
  }

  beginEdit(item:ConfigGroup) {
    this._groupService.setParameter(item);
     this._modalService.open(ConfigGroupEditComponent, {size: 'lg' }).result.then((result) => {      
    }, (reason) => {});
  }

  save(){
    this.errorMessage = null;
    this.warningMessage = null;
    this.infoMessage = null;
    
    this._groupService.setConfig(this.groups).subscribe(
      s => { 
        this.loadAll();
        this.warningMessage="Changes will be applied when server has loaded new states";
        this.infoMessage="Changes are saved"; 
      },
      error => this.errorMessage = <any>error.message);
  }

  add(){
    this._groupService.setParameter(null);
    this._modalService.open(ConfigGroupEditComponent, { size: 'lg'}).result.then((result) => {
      console.log(result);
      if(result == "save")
      {
        let item = this._groupService.getParameter();
        this.groups.push(item);
      }
    }, (reason) => {});
  }


  delete(item:ConfigGroup){
    let index = this.groups.indexOf(item);
    this.groups.splice(index,1);
  }

 
}
