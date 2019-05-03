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
      { label: 'Продукты', icon: 'pi pi-pw pi-bars', items:
        [
          { label: 'Список продуктов', icon: 'pi pi-pw pi-list', routerLink: '/products/list' },
          { label: 'Добавить продукт', icon: 'pi pi-pw pi-user-plus', routerLink: '/products/create' }
        ]
      } ,
      { label: 'Партнеры', icon: 'pi pi-pw pi-user-plus', items:
          [
            { label: 'Список партнеров', icon: 'pi pi-pw pi-list', routerLink: '/partners/list' },
            { label: 'Добавить партнера', icon: 'pi pi-pw pi-user-plus', routerLink: '/partners/create' }
          ]
      },
      { label: 'Шапка', icon: 'pi pi-pw pi-eject', items:
          [
            { label: 'Header', icon: 'pi pi-pw pi-list', routerLink: '/header' },
          ]
      },
      { label: 'Слайдер', icon: 'pi pi-pw pi-camera', items:
          [
            { label: 'Slider', icon: 'pi pi-pw pi-list', routerLink: '/slider' },
          ]
      },
      { label: 'Заказы', icon: 'pi pi-pw pi-dollar', items:
          [
            { label: 'Orders', icon: 'pi pi-pw pi-list', routerLink: '/orders' },
          ]
      }
    ];
  }
}
