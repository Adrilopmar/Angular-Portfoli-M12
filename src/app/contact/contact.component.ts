import { Component, OnInit,   } from '@angular/core';
import { animate,transition,style, trigger, state } from '@angular/animations';
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
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(20%)', opacity: '0'  }),
        animate(400)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateY(0%)',opacity: '1' }))
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {
  constructor( public route:ActivatedRoute, public Router:Router, private fb:FormBuilder, private contact:ContactService, public Dialog:MatDialog ) { }

  isOpen:boolean=true;
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(4)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    message: new FormControl ('', [Validators.required, Validators.minLength(50)])
  });
get email(){return this.contactForm.get('email')}
get name(){return this.contactForm.get('name')}
get message(){return this.contactForm.get('message')}

  ngOnInit(): void {
  }
  openDialog():void{
    const dialogRef = this.Dialog.open(DialogsProjectsComponent, {
      data:'contact'})
    dialogRef.afterClosed()
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
