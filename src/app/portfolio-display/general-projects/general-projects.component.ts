import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogsProjectsComponent } from 'src/app/dialogs-projects/dialogs-projects.component';

@Component({
  selector: 'app-general-projects',
  templateUrl: './general-projects.component.html',
  styleUrls: ['./general-projects.component.css']
})
export class GeneralProjectsComponent implements OnInit {

  constructor( public Dialog:MatDialog) { }

  ngOnInit(): void {
    let Adri= ['asd']
    console.log(Adri)
  }
  moreDetails(website:string):void{
    const dialogRef = this.Dialog.open(DialogsProjectsComponent, {
      width:'70%',
      height: '80%',
      data:website})
    dialogRef.afterClosed().subscribe(res => {console.log(res)})
    
  }
}
