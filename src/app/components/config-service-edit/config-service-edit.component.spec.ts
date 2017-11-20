import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigServiceEditComponent } from './config-service-edit.component';

describe('ConfigServiceEditComponent', () => {
  let component: ConfigServiceEditComponent;
  let fixture: ComponentFixture<ConfigServiceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigServiceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigServiceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
