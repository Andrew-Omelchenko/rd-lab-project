import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private authService: AuthService) { }
  profile: {
    name: '',
    email: '',
    joined: ''
  };

  ngOnInit() {
    const { name, email, joined } = this.authService.claims;
    this.profile.name = name;
    this.profile.email = email;
    this.profile.joined = joined;
  }

}
