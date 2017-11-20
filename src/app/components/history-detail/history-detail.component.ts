import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HistoryResult } from '../../models/history-result';
import { HistoryService } from '../../services/history.service'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss']
})
export class HistoryDetailComponent implements OnInit {
  public environment:String;
  public name:String;
  public errorMessage:String;
  public isLoading:Boolean;
  public list:HistoryResult[];

  constructor(private route: ActivatedRoute, private _historyService:HistoryService) { 
    this.route.params.subscribe( params => this.environment = params['environment']);
    this.route.params.subscribe( params => this.name = params['name']);

  }

  ngOnInit() {
    this.load();
  }

  load() { 
    this.isLoading=true;
    this.errorMessage = null;

    this._historyService.detail(this.environment, this.name).subscribe( s =>{ this.list = s; this.isLoading=false;} ,
    error =>  { this.errorMessage = <any>error.message; this.isLoading=false; });
  }
}
