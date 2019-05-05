import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Messages } from 'primeng/primeng';

/**
 * @class - ValidatorMessageComponent
 * @classdesc - компонент для отображения сообщений валидатора
 */
@Component({
  selector: 'app-validator-message',
  templateUrl: './validator-message.component.html',
  styleUrls: ['./validator-message.component.sass']
})
export class ValidatorMessageComponent implements OnInit {

  /**
   *  @access private
   *  @var field: FormControl - делегат от родительского компонента
   *  для контроля валидации полей
   */
  @Input()
  private field: FormControl;

  /**
   *  @access private
   *  @var msgs: Messages[] - массив сообщений праймфэйсес(primefaces)
   */
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
  public ngOnChanges() {
    const field = this.field;

    if ( !field || !field.errors ) {
      return false;
    }

    this.msgs = [];
    if ( field.errors.hasOwnProperty( 'minlength' ) ) {
      this.msgCnf['minlength'] = `Minimum length ${ field.errors.minlength.requiredLength }`;
    }
    if ( field.errors.hasOwnProperty( 'maxlength' ) ) {
      this.msgCnf['maxlength'] = `Maximum length ${ field.errors.maxlength.requiredLength }`;
    }

    Object.keys( field.errors ).forEach( ( error: string ) => {
      this.msgs.push(this.msgCnf[error]);
    });
  }
}
