import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.sass']
})
export class LeftMenuComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Категории',
        icon: 'pi pi-pw pi-list',
         items: [
           {
             label: 'Список категорий',
             icon: 'pi pi-fw pi-list',
             url: '/category/list',
           },
           {
             label: 'Создать категорию',
             icon: 'pi pi-fw pi-plus',
             url: '/category/create',
           }
         ]
      },
      {
        label: 'Меню',
        icon: 'pi pi-pw pi-bars',
        url: '/menu'
        // items: [
          // {label: 'Delete', icon: 'pi pi-fw pi-trash'},
        // ]
      },
      {
        label: 'Партнеры',
        icon: 'pi pi-pw pi-user-plus',
        url: '/partners'
      },
      {
        label: 'Шапка',
        icon: 'pi pi-pw pi-eject',
        url: '/header'
      },
      {
        label: 'Слайдер',
        icon: 'pi pi-pw pi-camera',
        url: '/slider'
      },
      {
        label: 'Заказы',
        icon: 'pi pi-pw pi-dollar',
        url: '/orders'
      }
    ];
  }
}
