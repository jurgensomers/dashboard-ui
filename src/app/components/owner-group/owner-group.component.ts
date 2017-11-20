import { Component, OnInit, Input } from '@angular/core';
import { OwnerGroup } from '../../models/owner-group';
import { OwnerResult } from '../../models/owner-result';

@Component({
  selector: 'app-owner-group',
  templateUrl: './owner-group.component.html',
  styleUrls: ['./owner-group.component.css']
})
export class OwnerGroupComponent implements OnInit {

  @Input() group:OwnerGroup;
  @Input() environments:OwnerResult[];

  constructor() { 
    this.environments=[];
  }

  ngOnInit() {
  }

}
