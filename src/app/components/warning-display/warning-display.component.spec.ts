import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningDisplayComponent } from './warning-display.component';

describe('WarningDisplayComponent', () => {
  let component: WarningDisplayComponent;
  let fixture: ComponentFixture<WarningDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
