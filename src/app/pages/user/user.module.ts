import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserLogOutComponent } from './user-log-out/user-log-out.component';

@NgModule({
  declarations: [
    UserComponent,
    UserSignInComponent,
    UserSignUpComponent,
    UserProfileComponent,
    UserLogOutComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    UserComponent,
    UserSignInComponent,
    UserSignUpComponent,
    UserProfileComponent
  ]
})
export class UserModule { }
