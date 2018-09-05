import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './mycomponent/login/login.component';
import { RegistrationComponent } from './mycomponent/registration/registration.component';
import { EmployeelistComponent } from './mycomponent/employeelist/employeelist.component';

const root : Routes = [
{path:'', redirectTo:'/login',pathMatch:'full'},
{path:'login', component :LoginComponent },
{path:'signUp', component:RegistrationComponent},
{path:'employeeList', component:EmployeelistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(root)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
