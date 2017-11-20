import { Component, OnInit, Input } from '@angular/core';
import { Group } from '../../models/group';
import { GroupResult } from '../../models/group-result';

@Component({
  selector: 'app-group-result',
  templateUrl: './group-result.component.html',
  styleUrls: ['./group-result.component.css']
})
export class GroupResultComponent implements OnInit {

  @Input() group:Group;
  @Input() environments:GroupResult[];
  @Input() history:String;

  constructor() { 
    this.environments=[];
  }

  ngOnInit() {
  }

}
