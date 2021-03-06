import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  profile: object;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.profile = this.authService.claims || {};
  }

}
