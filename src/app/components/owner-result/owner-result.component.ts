import { Component, OnInit, Input } from '@angular/core';
import { Owner } from '../../models/owner';
import { OwnerResult } from '../../models/owner-result';

@Component({
  selector: 'app-owner-result',
  templateUrl: './owner-result.component.html',
  styleUrls: ['./owner-result.component.css']
})
export class OwnerResultComponent implements OnInit {

  @Input() owner:Owner;
  @Input() environments:OwnerResult[];

  constructor() { }

  ngOnInit() { 
  }

}
