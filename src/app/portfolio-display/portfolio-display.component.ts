import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { DialogsProjectsComponent } from '../dialogs-projects/dialogs-projects.component';

@Component({
  selector: 'app-portfolio-display',
  templateUrl: './portfolio-display.component.html',
  styleUrls: ['./portfolio-display.component.css']
})
export class PortfolioDisplayComponent implements OnInit {

  constructor( public Dialog:MatDialog) { }
 

  ngOnInit(): void {
  }
  moreDetails(website:string):void{
    const dialogRef = this.Dialog.open(DialogsProjectsComponent, {
      width:'70%',
      height:'auto',
      data:website})
    dialogRef.afterClosed().subscribe(res => {console.log(res)})
    
  }
}
