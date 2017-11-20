import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigGroupEditComponent } from './config-group-edit.component';

describe('ConfigGroupEditComponent', () => {
  let component: ConfigGroupEditComponent;
  let fixture: ComponentFixture<ConfigGroupEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigGroupEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigGroupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
