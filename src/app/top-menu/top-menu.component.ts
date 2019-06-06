import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.sass']
})

export class TopMenuComponent implements OnInit {

  items: MenuItem[];

  /**
   * @access private
   * @var username: string
   */
  @Input()
  private username: string;

  /**
   * @access private
   * @var childEvent: EventEmitter<string>
   */
  @Output()
  private childEvent = new EventEmitter<string>();

  /**
   * constructor
   * @param authService: AuthService - сервис аутентификации
   */
  constructor( private authService: AuthService ) {}

  ngOnInit() {
    this.items = [
      {label: 'Home', icon: 'fa fa-fw fa-bar-chart'}
    ];
  }

  /**
   * logout - выполнить выход из приложения
   * @return boolean
   */
  private logout(): void {
    this.childEvent.emit();
  }
}
