import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

/**
 * @class - LeftMenuComponent
 * @classdesc - компонент для отображения левого меню
 */
@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.sass']
})
export class LeftMenuComponent implements OnInit {

  /**
   * @access private
   * @var MenuItem[]
   */
  private items: MenuItem[];

  /**
   * @access private
   * @var String currentPath
   */
  private currentPath: String;

  /**
   * constructor
   */
  constructor() {}

  ngOnInit() {
    this.items = [
      { label: 'Категории', icon: 'pi pi-pw pi-list', url: '/category/list' },
      { label: 'Меню', icon: 'pi pi-pw pi-bars', url: '/menu/list' } ,
      { label: 'Партнеры', icon: 'pi pi-pw pi-user-plus', url: '/partners' },
      { label: 'Шапка', icon: 'pi pi-pw pi-eject',  url: '/header' },
      { label: 'Слайдер', icon: 'pi pi-pw pi-camera', url: '/slider' },
      { label: 'Заказы', icon: 'pi pi-pw pi-dollar', url: '/orders' }
    ];
  }
}
