import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { PortfolioDisplayComponent } from './portfolio-display/portfolio-display.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog';
import { DialogsProjectsComponent } from './dialogs-projects/dialogs-projects.component'
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { ContactService } from './contact.service';
import { FormsModule } from '@angular/forms';
import { TopProjectsComponent } from './portfolio-display/top-projects/top-projects.component';
import { GeneralProjectsComponent } from './portfolio-display/general-projects/general-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    AboutComponent,
    PortfolioDisplayComponent,
    FooterComponent,
    WelcomeComponent,
    ContactComponent,
    DialogsProjectsComponent,
    TopProjectsComponent,
    GeneralProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  entryComponents:[DialogsProjectsComponent],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
