import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.scss']
})
export class UserLogoutComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  private onLogout(event) {
    this.authService.logout();
  }

}
