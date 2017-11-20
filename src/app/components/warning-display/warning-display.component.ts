import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-warning-display',
  templateUrl: './warning-display.component.html',
  styleUrls: ['./warning-display.component.scss']
})
export class WarningDisplayComponent implements OnChanges {
  
  @Input() warningMessage:String;
  
  constructor() { }

  ngOnChanges(changes:SimpleChanges) {    
    if(changes.warningMessage.currentValue != undefined && changes.warningMessage.currentValue != null) {
      let timer = Observable.timer(5000,5000);
      timer.subscribe(t=>  {this.close();});
    }
  }

  close(){
    this.warningMessage=null;
  }
}
