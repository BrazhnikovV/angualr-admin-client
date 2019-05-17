import {Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidatorToastComponent} from '../validator-toast/validator-toast.component';

/**
 * @class - DialogEntityComponent
 * @classdesc - компонент отображения диалогового окна с полями сущности
 */
@Component({
  selector: 'app-dialog-entity',
  templateUrl: './dialog-entity.component.html',
  styleUrls: ['./dialog-entity.component.sass']
})
export class DialogEntityComponent<T extends {}> implements OnInit {

  /**
   * @access private
   * @var viewChildren: QueryList<ValidatorToastComponent<T>> - объект для управления дочернеми компонентами
   */
  @ViewChildren( ValidatorToastComponent )
  private viewChildren: QueryList<ValidatorToastComponent>;

  /**
   * @access private
   * @var childEvent: EventEmitter<string>
   */
  @Output()
  private childEvent = new EventEmitter<string>();

  /**
   * @access private
   * @var product: Product
   */
  @Input()
  private entity: T;

  /**
   * @access private
   * @var cols: [] - структура таблицы(передается вызывающим компонентом)
   */
  @Input()
  private cols = [];

  /**
   *  @access private
   *  @var entityForm: FormGroup - группа валидируемых полей
   */
  private entityForm: FormGroup;

  /**
   * @access private
   * @var displayDialog: boolean
   */
  private _displayDialog: boolean;

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
   * constructor - конструктор
   */
  constructor() {}

  /**
   * ngOnInit -
   */
  ngOnInit() {
    let obj: any = {};
    this.cols.filter( ( el ) => el.validate ).map( ( el ) => {
      obj[el.field] = new FormControl('', [Validators.required]);
    });
    this.entityForm = new FormGroup(obj);
  }

  /**
   * delete - удалить запись из таблицы
   * @return void
   */
  delete() {
    console.log('### DialogEntityComponent => delete()');
    this.childEvent.emit( "delete" );
  }

  /**
   * set displayDialog - установить состояние окна
   * @setter
   * @param value - значение состояния окна(скрыто/показано)
   * @return void
   */
  public set displayDialog( value: boolean ) {
    this._displayDialog = value;
  }

  /**
   * onSubmit
   */
  onSubmit() {
    console.log('### DialogEntityComponent => onSubmit()');

    let isError: boolean = false;

    for ( let key in this.entityForm.controls ) {
      if ( this.entityForm.controls[key].errors ) {
        let errors: string[] = this.handleMessage( this.entityForm.controls[key] );
        for (let errorsKey in errors) {
          isError = true;
          this.viewChildren.first.addSingle( key, errors[errorsKey] );
        }
      }
    }

    if ( !isError ) {
      this.childEvent.emit( "save" );
    }
  }

  /**
   * handleMessage -
   * @param field
   * @return string[]
   */
  handleMessage ( field ): string[] {
    let msgs = [];
    if ( field.errors.hasOwnProperty( 'minlength' ) ) {
      this.msgCnf['minlength'] = ` Minimum length ${ field.errors.minlength.requiredLength }`;
    }
    if ( field.errors.hasOwnProperty( 'maxlength' ) ) {
      this.msgCnf['maxlength'] = ` Maximum length ${ field.errors.maxlength.requiredLength }`;
    }
    if ( field.errors.hasOwnProperty( 'min' ) ) {
      this.msgCnf['min'] = ` Min number ${ field.errors.min.min }`;
    }
    if ( field.errors.hasOwnProperty( 'max' ) ) {
      this.msgCnf['max'] = ` Max number length ${ field.errors.max.max }`;
    }

    if ( field.errors.hasOwnProperty( 'pattern' ) ) {
      if ( field.errors.pattern.requiredPattern === '^[0-9]*$' ) {
        this.msgCnf['pattern'] = ` There must be a number: ${ field.errors.pattern.requiredPattern }`;
      }
    }

    Object.keys( field.errors ).forEach( ( error: string ) => {
      msgs.push(this.msgCnf[error]);
    });

    return msgs;
  }
}
