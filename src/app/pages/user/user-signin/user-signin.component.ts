import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.scss']
})
export class UserSigninComponent implements OnInit {
  public signIn: FormGroup;
  private fieldValues: {
    email: string, password: string
  } = {
    email: '',
    password: ''
  };

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.signIn = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.fieldValues.email = this.signIn.get('email').value;
    this.fieldValues.password = this.signIn.get('password').value;
    console.log(this.fieldValues);
    this.authService.signin(this.fieldValues);
  }

}
