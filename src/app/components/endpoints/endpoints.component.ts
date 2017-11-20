import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../services/system.service';
import { Observable } from 'rxjs';
import { Endpoint } from '../../models/endpoint';

@Component({
  selector: 'app-endpoints',
  templateUrl: './endpoints.component.html',
  styleUrls: ['./endpoints.component.scss']
})
export class EndpointsComponent implements OnInit {

  public endpoints:Endpoint[];
  public errorMessage:any;
  
  constructor(private _systemService:SystemService) { }

  ngOnInit() {
    this.load();
  }

  load(){
     this._systemService.getEndpoints().subscribe( s => this.endpoints = s, error =>  this.errorMessage = <any>error.message);
  }

  filter(){

  }
}
