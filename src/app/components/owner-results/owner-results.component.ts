import { Component, OnInit } from '@angular/core';
import { StatusService } from '../../services/status.service';
import { Observable } from 'rxjs';
import { OwnerResults } from '../../models/owner-results';
import { OwnerService } from '../../models/owner-service';
import { ActivatedRoute } from "@angular/router";
import { TimerService } from '../../services/timer.service';
import { settings } from '../../app.settings';

@Component({
  selector: 'app-owner-results',
  templateUrl: './owner-results.component.html',
  styleUrls: ['./owner-results.component.css']
})
export class OwnerResultsComponent implements OnInit {

  public result:OwnerResults;
  private filter:String;
  public errorMessage:any;
  public timerValue:Number;
  public isLoading:Boolean;  

  constructor(private _statusService:StatusService , private route: ActivatedRoute, private _timerService:TimerService)
  {
     this.route.params.subscribe( params => this.filter = params['name']);
     this.result = new OwnerResults();
  }

  loadAll(){
    this.errorMessage = null;
    this.isLoading=true;

    this._statusService.getOwners().subscribe(
      s =>{
        this.result = s;
        this.isLoading=false;
      } ,
      error => { this.errorMessage = <any>error.message; this.isLoading=false;});
  }

  loadFilter(){       
    this.errorMessage = null;
    this.isLoading=true;

    this._statusService.getOwner(this.filter).subscribe(
      s =>{ this.result = s; this.isLoading=false; },
      error => { this.errorMessage = <any>error.message; this.isLoading=false;});

    this._timerService.autoNavigateTfs(this.filter);
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
