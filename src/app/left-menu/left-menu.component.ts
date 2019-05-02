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
      { label: 'Категории', icon: 'pi pi-pw pi-list', items:
        [
          { label: 'Список категорий', icon: 'pi pi-pw pi-list', routerLink: '/category/list' },
          { label: 'Добавить категорию', icon: 'pi pi-pw pi-user-plus', routerLink: '/category/create' }
        ]
      },
      { label: 'Меню', icon: 'pi pi-pw pi-bars', items:
        [
          { label: 'Список пунктов меню', icon: 'pi pi-pw pi-list', routerLink: '/menu/list' },
          { label: 'Добавить пункт меню', icon: 'pi pi-pw pi-user-plus', routerLink: '/menu/create' }
        ]
      } ,
      { label: 'Партнеры', icon: 'pi pi-pw pi-user-plus', routerLink: '/partners' },
      { label: 'Шапка', icon: 'pi pi-pw pi-eject',  routerLink: '/header' },
      { label: 'Слайдер', icon: 'pi pi-pw pi-camera', routerLink: '/slider' },
      { label: 'Заказы', icon: 'pi pi-pw pi-dollar', routerLink: '/orders' }
    ];
  }
}
