import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorySelectComponent } from './history-select.component';

describe('HistorySelectComponent', () => {
  let component: HistorySelectComponent;
  let fixture: ComponentFixture<HistorySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorySelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
