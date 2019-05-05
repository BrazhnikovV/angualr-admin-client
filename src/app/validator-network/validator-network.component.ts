import {Component, Input, OnInit} from '@angular/core';
import { Messages } from 'primeng/primeng';

/**
 * @class - ValidatorNetworkComponent
 * @classdesc - компонент для отображения сообщений валидатора сервера
 */
@Component({
  selector: 'app-validator-network',
  templateUrl: './validator-network.component.html',
  styleUrls: ['./validator-network.component.sass']
})
export class ValidatorNetworkComponent implements OnInit {

  /**
   *  @access private
   *  @var msgs: Messages[] - массив сообщений праймфэйсес(primefaces)
   */
  @Input()
  private msgs: Messages[] = [];

  /**
   *  @access private
   *  @var msgCnf: {} - небор текстовых сообщений для различных видов валидации
   */
  private msgCnf: {} = {
    required: 'Field is required',
    email:    'Field should contain e-mail',
    pattern:  'Field does not match to pattern'
  }

  /**
   * constructor
   */
  constructor() {}

  /**
   * ngOnInit
   */
  ngOnInit() {}

  /**
   * ngOnChanges - перехватываем событие изменения компонента
   * @return void
   */
  public ngOnChanges( field ) {

    if ( !field || !field.errors ) {
      return false;
    }
  }
}
