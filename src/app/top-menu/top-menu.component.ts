import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.sass']
})

export class TopMenuComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'Home', icon: 'fa fa-fw fa-bar-chart'}
    ];
  }
}
