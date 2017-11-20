import { Component } from '@angular/core';
import { StatusService } from './services/status.service';
import { Observable } from 'rxjs';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SystemInfoComponent } from './components/system-info/system-info.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private _modalService: NgbModal)
  {
  }
 

  ngOnInit(){
  }

  showInfo(){
     this._modalService.open(SystemInfoComponent).result.then((result) => {      
    }, (reason) => {});
  }
 
}
