import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HistorySelectComponent } from '..//history-select/history-select.component';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss']
})
export class HeaderInfoComponent implements OnInit {
  @Input() public date:Date;
  @Input() public isLoading:Boolean;

  constructor(private _modalService: NgbModal) { }

  ngOnInit() {
  } 
}
