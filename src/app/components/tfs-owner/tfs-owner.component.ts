import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TfsResults } from '../../models/tfs-results';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from 'rxjs';
import { OwnerService } from '../../services/owner.service';
import { TfsService } from '../../services/tfs.service';
import { TimerService } from '../../services/timer.service';
import { SimpleChanges } from '@angular/core';
import { settings } from '../../app.settings';

@Component({
  selector: 'app-tfs-owner',
  templateUrl: './tfs-owner.component.html',
  styleUrls: ['./tfs-owner.component.scss']
})

export class TfsOwnerComponent implements OnInit {

  public isLoading:Boolean;
  public errorMessage:String;
  public results:TfsResults; 
  public owner:String;

  constructor(private _tfsService:TfsService, private route: ActivatedRoute, private _timerService:TimerService) { 
    this.route.params.subscribe( params => {
      this.owner = params['owner'];
      this.loadFiltered();}); 
    this.results=new TfsResults();
  }

  loadFiltered(){
    this.isLoading=true;
    this._tfsService.getOwner(this.owner).subscribe( s =>{ this.results = s;this.isLoading=false;} ,
    error =>  { this.errorMessage = <any>error.message; this.isLoading=false;});

    this._timerService.autoNavigateOwner(this.owner);
  }

  ngOnInit(){
    this.loadFiltered();
  }
/*
  ngOnChanges(changes:SimpleChanges) { 
     if(changes.owner.currentValue != undefined && changes.owner.currentValue != null) {
      this.loadFiltered();
    } 
  } */
}
