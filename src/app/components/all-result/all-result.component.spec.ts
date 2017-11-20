/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllResultComponent } from './all-result.component';

describe('AllResultComponent', () => {
  let component: AllResultComponent;
  let fixture: ComponentFixture<AllResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
