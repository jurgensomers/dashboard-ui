import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-info-display',
  templateUrl: './info-display.component.html',
  styleUrls: ['./info-display.component.scss']
})
export class InfoDisplayComponent implements OnChanges {
  @Input() infoMessage:String;

  constructor() { }

  ngOnInit() {
  }
  
  ngOnChanges(changes:SimpleChanges) {    
    if(changes.infoMessage.currentValue != undefined && changes.infoMessage.currentValue != null) {
      let timer = Observable.timer(5000,5000);
      timer.subscribe(t=>  {this.close();});
    }
  }

  close(){
    this.infoMessage=null;
  }
}
