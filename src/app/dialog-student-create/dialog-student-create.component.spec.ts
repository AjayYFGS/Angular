import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStudentCreateComponent } from './dialog-student-create.component';

describe('DialogStudentCreateComponent', () => {
  let component: DialogStudentCreateComponent;
  let fixture: ComponentFixture<DialogStudentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogStudentCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogStudentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
