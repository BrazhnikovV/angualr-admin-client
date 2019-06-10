import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorToastComponent } from '../validator-toast/validator-toast.component';
import { HeandlerMessage } from '../utils/HeandlerMessage'

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
   * @var entity: T
   */
  @Input()
  private entity: T;

  /**
   * @access private
   * @var fieldList: T[]
   */
  @Input()
  private fieldList: T[] = [];

  /**
   * @access private
   * @var selectedFieldList: T
   */
  @Input()
  private selectedFieldList: T;

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
   * @access private
   * @var isOnSubmit: boolean
   */
  private isOnSubmit: boolean = false;

  /**
   * constructor - конструктор
   */
  constructor() {}

  /**
   * ngOnInit -
   */
  ngOnInit() {
    console.log('### DialogEntityComponent => ngOnInit()');

    let objValidators: any = {};
    this.cols.filter( ( el ) => el.validate ).map( ( el ) => {
      if ( el.validate instanceof Object ) {
        objValidators[el.field] = new FormControl('', this.formValidationRules( el.validate ) );
      }
      else {
        objValidators[el.field] = new FormControl('', [Validators.required] );
      }
    });

    this.entityForm = new FormGroup( objValidators );
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
   * ngAfterContentChecked - обновляем выбранный элемент списка
   */
  public ngAfterContentChecked() {

    if ( this.fieldList === undefined ) {
      return;
    }

    this.fieldList
      .filter( filteredElement => filteredElement['id'] === this.entity['category_id'] )
      .map( mapElement => {
        this.selectedFieldList = mapElement;
      });

    if ( !this._displayDialog ) {
      this.selectedFieldList = null;
    }
  }

  /**
   * onSubmit
   */
  onSubmit() {
    console.log('### DialogEntityComponent => onSubmit()');

    let isError: boolean = false;
    this.isOnSubmit = true;

    for ( let key in this.entityForm.controls ) {
      if ( this.entityForm.controls[key].errors ) {
        let errors: string[] = HeandlerMessage.handle( this.entityForm.controls[key] );
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
   * onChangeFieldList
   */
  onChangeFieldList() {
    console.log('### DialogEntityComponent => onChangeFieldList()');
    this.entity['category_id'] = this.selectedFieldList['id'];
  }

  /**
   * formValidationRules - сформировать правила валидации для поля формы
   * @param field - валидируемое поле
   * @return any[]
   */
  formValidationRules( field ): any[] {

    let vaildatorOpts: any = [];

    Object.keys( field ).map( valdateEl => {
      if ( valdateEl === 'required' ) {
        vaildatorOpts.push( Validators.required );
      }

      if ( valdateEl === 'minLength' ) {
        vaildatorOpts.push( Validators.minLength( field[valdateEl] ) );
      }

      if ( valdateEl === 'maxLength' ) {
        vaildatorOpts.push( Validators.maxLength( field[valdateEl] ) );
      }
    });

    return vaildatorOpts;
  }
}
