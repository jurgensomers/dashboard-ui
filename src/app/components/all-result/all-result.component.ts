import { Component, OnInit } from '@angular/core';
import { StatusService } from '../../services/status.service';
import { Observable } from 'rxjs';
import { GenericResults } from '../../models/generic-results';
import { settings } from '../../app.settings';

@Component({
  selector: 'app-all-result',
  templateUrl: './all-result.component.html',
  styleUrls: ['./all-result.component.css']
})
export class AllResultComponent implements OnInit {

  public result:GenericResults; 
  public errorMessage:any;
  public isLoading:Boolean;

  constructor(private _statusService:StatusService)
  {
     this.result = new GenericResults();
  }

  loadAll(){
    this.isLoading=true;
    this._statusService.getAll().subscribe( s =>{ this.result = s;this.isLoading=false;} ,
    error =>  { this.errorMessage = <any>error.message; this.isLoading=false;});
  }

  ngOnInit(){
    let timer = Observable.timer(settings.refreshInterval,settings.refreshInterval);
    this.loadAll();
    timer.subscribe(t=>  {this.loadAll();});
  }

}
