import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { StatusService } from '../../services/status.service';
import { GroupResults } from '../../models/group-results';
import { settings } from '../../app.settings';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-group-results',
  templateUrl: './group-results.component.html',
  styleUrls: ['./group-results.component.css']
})
export class GroupResultsComponent implements OnInit {
  
  public result:GroupResults;
  private filter:String;
  private history:String;
  public errorMessage:any;
  public infoMessage:any;
  public isLoading:Boolean;
 
  constructor(private _statusService:StatusService, private route: ActivatedRoute, private _timerService:TimerService) {
    this.route.params.subscribe( params => this.filter = params['name']); 
    this.result = new GroupResults();
  }

  loadAll() {
    this.errorMessage = null;
    this.isLoading=true;
    this._statusService.getGroups().subscribe( 
      s => { this.result = s;this.isLoading=false;},
      error => {this.isLoading = false; this.errorMessage = <any>error.message});
  }

  loadFilter() {
    this.errorMessage = null;
    this.isLoading=true;
    this._statusService.getGroup(this.filter).subscribe(
      s =>{ this.result = s; this.isLoading=false;} ,
      error =>  { this.errorMessage = <any>error.message; this.isLoading=false});
  }
 

  load() {
   if(this.filter == undefined)
    {
      this.loadAll();
      this._timerService.start().subscribe(t => { if( this._timerService.timerActive()) this.loadAll();});
    }
    else
    {
      this.loadFilter();
      this._timerService.start().subscribe(t => { if( this._timerService.timerActive()) this.loadFilter();});
    }           
  }

  ngOnInit() {
    this.load();
  }
}
