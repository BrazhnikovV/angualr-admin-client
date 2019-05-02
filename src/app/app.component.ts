import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, Routes } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  /**
   * @access private
   * @var String title
   */
  private title: String = 'angular-admin-panel';

  /**
   * constructor
   */
  constructor() {}

  ngOnInit() {

  }
}
