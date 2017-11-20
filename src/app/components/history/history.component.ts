import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../services/history.service';
import { GenericResults } from '../../models/generic-results';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  public list:String[];
  public errorMessage:String; 
  public result:GenericResults; 
  public isLoading:Boolean;

  constructor(private _historyService:HistoryService) { 
    this.result = new GenericResults();
  }

  ngOnInit() { 
     this._historyService.list().subscribe( s =>{ this.list = s; } ,
    error =>  { this.errorMessage = <any>error.message; });
  }

  load(time:String){  
    this.isLoading=true;
    this.errorMessage = null;

    this._historyService.getAll(time).subscribe( s =>{ this.result = s; this.isLoading=false;} ,
    error =>  { this.errorMessage = <any>error.message; this.isLoading=false; });
  }


}
