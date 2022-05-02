import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path:'./', component:WelcomeComponent,
    data:{
      title: 'Adri lopez martinez',
      description:'Front end Angular developer portfolio, projects, personal information, programmer skill, soft skills and aim and goals',
      ogTitle:`Portfolio of a Frontend developer from Barcelona. Friendly and nice one-page made with Angular. 
               Check the web out to know more about my projects and me`
}},
  {path:'contact', component: ContactComponent,
    data:{
      title:'Contact',
      description:'Contact form for reaching out Adri. A friendly frontend developer with Angular.',
      ogTitle:'Contact details and contact form of Adri. A nice Frontend Angular developer.' 
    }
  },
  {path:'', redirectTo:'./', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
