import { Component, OnInit } from '@angular/core';

/**
 * @class - MenuCreateComponent
 * @classdesc - компонент для создания пункта меню
 */
@Component({
  selector: 'app-menu-create',
  templateUrl: './menu-create.component.html',
  styleUrls: ['./menu-create.component.sass']
})
export class MenuCreateComponent implements OnInit {

  /**
   * @access private
   * @var boolean checked
   */
  private checked: boolean;

  /**
   * constructor
   */
  constructor() {}

  ngOnInit() {}
}
