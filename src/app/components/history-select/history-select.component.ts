import { Component, OnInit, Input } from '@angular/core';
import { ConfigHost } from '../../models/config-host';
import { HistoryService } from '../../services/history.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { settings } from '../../app.settings';

@Component({
  selector: 'app-history-select',
  templateUrl: './history-select.component.html',
  styleUrls: ['./history-select.component.scss']
})
export class HistorySelectComponent implements OnInit {
  public list:String[];
  public errorMessage:String;
  public selectedItem:String;

  constructor(private _historyService:HistoryService, public activeModal: NgbActiveModal) { }

  ngOnInit() {
    //this.selectedItem=settings.history;
     this._historyService.list().subscribe( s =>{ this.list = s; this.list.push('current');} ,
    error =>  { this.errorMessage = <any>error.message; });
  }

  select(){ 
    //settings.history=this.selectedItem;
    this.activeModal.close('select');
  }

  close(){
      this.activeModal.close('close');
  }
}
