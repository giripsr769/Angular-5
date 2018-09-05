import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './mycomponent/login/login.component';
import { RegistrationComponent } from './mycomponent/registration/registration.component';
import { HeadComponent } from './mycomponent/head/head.component';
import { FootComponent } from './mycomponent/foot/foot.component';
import { EmployeelistComponent } from './mycomponent/employeelist/employeelist.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HeadComponent,
    FootComponent,
    EmployeelistComponent
   
  ],
  imports: [
     FormsModule,BrowserModule, BrowserAnimationsModule, AppRoutingModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
