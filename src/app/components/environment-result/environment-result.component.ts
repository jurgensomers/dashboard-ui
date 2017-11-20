import { Component, OnInit, Input } from '@angular/core';
import { Environment } from '../../models/environment';

@Component({
  selector: 'app-environment-result',
  templateUrl: './environment-result.component.html',
  styleUrls: ['./environment-result.component.css']
})
export class EnvironmentResultComponent implements OnInit {

   @Input() environment:Environment;

  constructor() { 
  }

  ngOnInit() {
  }

}
