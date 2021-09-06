import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog' 
@Component({
  selector: 'app-dialogs-projects',
  templateUrl: './dialogs-projects.component.html',
  styleUrls: ['./dialogs-projects.component.css']
})
export class DialogsProjectsComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<DialogsProjectsComponent>,
     @Inject(MAT_DIALOG_DATA) public data:any,
  ) { }

  ngOnInit(): void {
  }

}
