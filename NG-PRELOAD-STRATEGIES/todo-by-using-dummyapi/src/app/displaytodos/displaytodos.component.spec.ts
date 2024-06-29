import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaytodosComponent } from './displaytodos.component';

describe('DisplaytodosComponent', () => {
  let component: DisplaytodosComponent;
  let fixture: ComponentFixture<DisplaytodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaytodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaytodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
