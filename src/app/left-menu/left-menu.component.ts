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
        label: 'Каталог',
        icon: 'pi pi-pw pi-list',
      },
      {
        label: 'Меню',
        icon: 'pi pi-pw pi-bars',
        // items: [
          // {label: 'Delete', icon: 'pi pi-fw pi-trash'},
        // ]
      },
      {
        label: 'Партнеры',
        icon: 'pi pi-pw pi-user-plus'
      },
      {
        label: 'Шапка',
        icon: 'pi pi-pw pi-eject',
      },
      {
        label: 'Слайдер',
        icon: 'pi pi-pw pi-camera',
      },
      {
        label: 'Заказы',
        icon: 'pi pi-pw pi-dollar',
      }
    ];
  }
}
