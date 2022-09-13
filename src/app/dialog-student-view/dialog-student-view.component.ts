import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-student-view',
  templateUrl: './dialog-student-view.component.html',
  styleUrls: ['./dialog-student-view.component.scss']
})
export class DialogStudentViewComponent implements OnInit {
  
  constructor(@Inject(MAT_DIALOG_DATA) public viewData:any,
  private dilogRef:MatDialogRef<DialogStudentViewComponent>) { }

  ngOnInit(): void {
   

  }

}
