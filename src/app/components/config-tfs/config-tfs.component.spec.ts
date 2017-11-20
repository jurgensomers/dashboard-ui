import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigTfsComponent } from './config-tfs.component';

describe('ConfigTfsComponent', () => {
  let component: ConfigTfsComponent;
  let fixture: ComponentFixture<ConfigTfsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigTfsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigTfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
