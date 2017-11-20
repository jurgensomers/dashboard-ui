import { Component, OnInit } from '@angular/core';
import { StatusService } from '../../services/status.service';
import { Observable } from 'rxjs';
import { EnvironmentResults } from '../../models/environment-results';
import { ActivatedRoute } from "@angular/router";
import { settings } from '../../app.settings';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-environment-results',
  templateUrl: './environment-results.component.html',
  styleUrls: ['./environment-results.component.css']
})
export class EnvironmentResultsComponent implements OnInit {

   public result:EnvironmentResults;
   private filter:String;
   public isLoading:Boolean;

  public errorMessage:any;

  constructor(private _statusService:StatusService, private route: ActivatedRoute, private _timerService:TimerService)
  {
     this.route.params.subscribe( params => this.filter = params['name']);
     this.result = new EnvironmentResults();
  }

  loadAll(){
    this.errorMessage = null;
    this.isLoading=true;

      this._statusService.getEnvironments().subscribe(
      s =>{
        this.result = s;
        this.isLoading=false;
      } ,
      error => { this.errorMessage = <any>error.message; this.isLoading=false;});
  }

  loadFilter(){
    this.errorMessage = null;
    this.isLoading=true;

      this._statusService.getEnvironment(this.filter).subscribe(
      s =>{
        this.result = s;
        this.isLoading=false;
      } ,
      error =>  { this.errorMessage = <any>error.message; this.isLoading=false;});
  }

  ngOnInit(){
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

}
