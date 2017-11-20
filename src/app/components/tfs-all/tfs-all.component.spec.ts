import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfsAllComponent } from './tfs-all.component';

describe('TfsAllComponent', () => {
  let component: TfsAllComponent;
  let fixture: ComponentFixture<TfsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
