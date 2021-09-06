import { Component, OnInit,   } from '@angular/core';
import { animate,transition,style, trigger } from '@angular/animations';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ContactService } from '../contact.service';
import { DialogsProjectsComponent } from '../dialogs-projects/dialogs-projects.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations:[
    trigger('flyIn',[
      transition(':enter',[
        style({transform:'translateY(25%)', opacity:'0', transition: '.5s'}),
        animate('.5s')
      ]),
    ]),
  ]
})
export class ContactComponent implements OnInit {
  constructor( public route:ActivatedRoute, public Router:Router, private fb:FormBuilder, private contact:ContactService, public Dialog:MatDialog ) { }

  isOpen:boolean=true;
  contactForm: FormGroup;

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['',  Validators.required],
      email: ['', Validators.required],
      message:[]
    
    })
  }
  openDialog():void{
    const dialogRef = this.Dialog.open(DialogsProjectsComponent, {
      data:'contact'})
    dialogRef.afterClosed().subscribe(res => {console.log(res)})
  }
  onSubmitc(event:Event, formData):void{
    event.preventDefault()
    this.contact.onSubmitc(formData, event)
      console.log(formData)
      this.contact.postMessage(formData).subscribe(response=>{
        this.openDialog()
        setTimeout( function() {location.href =''}, 1500)
        console.log(response)
      }, error=>{
        console.warn(error.responseText)
        console.log({error})
      })
  }

}
