import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../../services/owner.service';
import { GroupService } from '../../services/group.service';
import { EnvironmentService } from '../../services/environment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public owners:String[];
  public groups:String[];
  public environments:String[];
  public errorMessage:String;

  constructor( private _ownerService:OwnerService, private _groupService:GroupService, private _environmentService:EnvironmentService) { }

  ngOnInit() {
    this.errorMessage = null;
    this.loadOwners();
    this.loadGroups();
    this.loadEnvironments();
  }

  loadOwners(){    
     this._ownerService.getAll().subscribe( s => this.owners = s, error => this.errorMessage = error.message);
  }

  loadGroups(){
     this._groupService.getAll().subscribe( s => this.groups = s, error =>  this.errorMessage = error.message);
  }

  loadEnvironments(){
     this._environmentService.getAll().subscribe( s => this.environments = s, error => this.errorMessage = error.message);
  }
}
