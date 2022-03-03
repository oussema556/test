import { NgModule } from '@angular/core';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [CommonModule]

})
export class AuthModule { }
