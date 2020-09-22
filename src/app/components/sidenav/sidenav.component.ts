import { Component, OnInit } from '@angular/core';

import { navItems } from '../../const';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  navSections = [];

  constructor() { }

  ngOnInit(): void {
    this.navSections = navItems;
  }

}
