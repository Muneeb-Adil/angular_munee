import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEachQuestionComponent } from './display-each-question.component';

describe('DisplayEachQuestionComponent', () => {
  let component: DisplayEachQuestionComponent;
  let fixture: ComponentFixture<DisplayEachQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayEachQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayEachQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
