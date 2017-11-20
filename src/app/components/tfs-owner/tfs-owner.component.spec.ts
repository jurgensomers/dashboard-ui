import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfsOwnerComponent } from './tfs-owner.component';

describe('TfsOwnerComponent', () => {
  let component: TfsOwnerComponent;
  let fixture: ComponentFixture<TfsOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfsOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfsOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
