import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigTfsEditComponent } from './config-tfs-edit.component';

describe('ConfigTfsEditComponent', () => {
  let component: ConfigTfsEditComponent;
  let fixture: ComponentFixture<ConfigTfsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigTfsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigTfsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
