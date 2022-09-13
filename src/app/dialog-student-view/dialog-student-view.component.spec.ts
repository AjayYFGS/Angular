import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStudentViewComponent } from './dialog-student-view.component';

describe('DialogStudentViewComponent', () => {
  let component: DialogStudentViewComponent;
  let fixture: ComponentFixture<DialogStudentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogStudentViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogStudentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
