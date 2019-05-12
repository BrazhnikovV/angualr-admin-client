import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
   * @var displayDialog: boolean
   */
  private _displayDialog: boolean;

  /**
   * constructor - конструктор
   */
  constructor() {}

  /**
   * ngOnInit -
   */
  ngOnInit() {}

  /**
   * save - сохранить зменения
   * @return void
   */
  save() {
    this.childEvent.emit( "save" );
  }

  /**
   * delete - удалить запись из таблицы
   * @return void
   */
  delete() {
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
}
