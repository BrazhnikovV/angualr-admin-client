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
   *  @var field: FormControl -
   */
  @Input()
  private field: FormControl;

  /**
   *  @access private
   *  @var msgs: Messages[] -
   */
  private msgs: Messages[] = [];

  /**
   *  @access private
   *  @var msgCnf: {} -
   */
  private msgCnf: {} = {
    required: 'Field is required',
    email:    'Field should contain e-mail',
    pattern:  'Field does not match to pattern'
  }

  /**
   * constructor
   */
  constructor() {
  }

  /**
   * ngOnInit
   */
  ngOnInit() {}

  /**
   * ngOnChanges
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

    console.log('this.field.errors => ', this.field.errors);
    console.log('this.msgs => ', this.msgs);
  }

  public testHui() {
    console.log('testHui => testHui');
  }
}
