import { Component, OnInit, Input } from '@angular/core';
import { EnvironmentGroup } from '../../models/environment-group';

@Component({
  selector: 'app-environment-group',
  templateUrl: './environment-group.component.html',
  styleUrls: ['./environment-group.component.css']
})
export class EnvironmentGroupComponent implements OnInit {

  
  @Input() group:EnvironmentGroup;
  @Input() environment:String;

  constructor() { 
  }

  ngOnInit() {
    
  }


}
