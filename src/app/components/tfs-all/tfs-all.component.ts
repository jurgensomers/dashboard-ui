import { Component, OnInit } from '@angular/core';
import { TfsService } from '../../services/tfs.service';
import { Observable } from 'rxjs';
import { TfsResults } from '../../models/tfs-results';
import { settings } from '../../app.settings';
import { OwnerService } from '../../services/owner.service';
import { ActivatedRoute } from "@angular/router";
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-tfs-all',
  templateUrl: './tfs-all.component.html',
  styleUrls: ['./tfs-all.component.scss']
})
export class TfsAllComponent implements OnInit {

  public result:TfsResults; 
  public errorMessage:any;
  public isLoading:Boolean;
  public owners:String[];
  public owner:String;

  constructor(private _tfsService:TfsService, private _ownerService:OwnerService, private route: ActivatedRoute, private _timerService:TimerService)
  {
     this.route.params.subscribe( params => this.owner = params['owner']); 
     this.result = new TfsResults();
  }

  loadAll(){
    this.isLoading=true;
    this._tfsService.getAll().subscribe( s =>{ this.result = s;this.isLoading=false;} ,
    error =>  { this.errorMessage = <any>error.message; this.isLoading=false;});
  }

  loadFiltered(){
    console.log("filtered : " + this.owner);
    this.isLoading=true;
    this._tfsService.getOwner(this.owner).subscribe( s =>{ this.result = s;this.isLoading=false;} ,
    error =>  { this.errorMessage = <any>error.message; this.isLoading=false;});

     this._timerService.autoNavigateOwner(this.owner);
  }

  loadOwners(){
    this.isLoading=true;
    this._ownerService.getAll().subscribe( s =>{ this.owners = s;this.isLoading=false;} ,
    error =>  { this.errorMessage = <any>error.message; this.isLoading=false;});
  }

  load(){
    if(this.owner != null && this.owner != undefined)
      this.loadFiltered();
    else
      this.loadAll();   
  }

  ngOnInit(){
    let timer = Observable.timer(settings.refreshInterval,settings.refreshInterval); 
    this.load();
    this.loadOwners();
    timer.subscribe(t=>  {this.load();});
  }

}
