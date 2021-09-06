import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {map} from 'rxjs/operators'
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private api ='https://formspree.io/f/mzbyypdq'

  constructor(private http:HttpClient) { }
    onSubmitc(contactForm: NgForm, event:Event) {
      event.preventDefault()
     if (contactForm.valid) {
       const email = contactForm.value;
       const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
       this.http.post('https://formspree.io/f/mzbyypdq',
         { name: email.name, replyto: email.email, message: email.message },
         { 'headers': headers }).subscribe(
           response => {
             console.log(response);
           }
         );
     }
     
   }
   postMessage(input:any){
     return this.http.post(this.api, input,{responseType: 'text'}).pipe(
       map(
         (response:any)=>{
           if(response){
             return response
           }
         },
         (error:any)=>{
           return error;
         }
       )
     )
   }
}
