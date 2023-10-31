/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestComComponent } from './TestCom.component';

describe('TestComComponent', () => {
  let component: TestComComponent;
  let fixture: ComponentFixture<TestComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
