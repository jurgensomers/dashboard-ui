import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigHostEditComponent } from './config-host-edit.component';

describe('ConfigHostEditComponent', () => {
  let component: ConfigHostEditComponent;
  let fixture: ComponentFixture<ConfigHostEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigHostEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigHostEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
