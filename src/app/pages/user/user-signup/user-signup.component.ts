import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {
  public signUp: FormGroup;
  private fieldValues: {
    name: string, email: string, password: string
  } = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.signUp = this.formBuilder.group({
      name: [''],
      email: [''],
      password: ['']
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.fieldValues.name = this.signUp.get('name').value;
    this.fieldValues.email = this.signUp.get('email').value;
    this.fieldValues.password = this.signUp.get('password').value;
    this.authService.signup(this.fieldValues);
  }
}
