import { Component, OnInit } from '@angular/core';

import { strings } from '../../constants/strings';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private copyright: string = strings.footer.copyright;
  isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
