import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
   * @var products: []
   */
  @Input()
  private entityList: Array<T>;

  /**
   * @access private
   * @var product: Product
   */
  @Input()
  private entity: T;

  /**
   * @access private
   * @var selectedProduct: Product
   */
  @Input()
  private selectedEntity: T;

  /**
   * @access private
   * @var newProduct: boolean
   */
  private newEntity: boolean;

  /**
   * @access private
   * @var displayDialog: boolean
   */
  private displayDialog: boolean;

  /**
   * constructor - конструктор
   */
  constructor() {}

  /**
   * ngOnInit -
   */
  ngOnInit() {

  }

  /**
   * showDialogToAdd - показать диалоговое окно для ввода данных
   * @return void
   */
  showDialogToAdd() {
    this.newEntity = true;
    this.displayDialog = true;
  }

  /**
   * save - сохранить зменения
   * @return void
   */
  save() {
    let entities = [...this.entityList];
    if ( this.newEntity ) {
      entities.push(this.entity);
    }
    else {
      entities[this.entityList.indexOf( this.selectedEntity )] = this.entity;
    }

    this.displayDialog = false;
    this.childEvent.emit( "save" );
  }

  /**
   * delete - удалить запись из таблицы
   * @return void
   */
  delete() {
    this.entity = null;
    this.displayDialog = false;
    this.childEvent.emit( "delete" );
  }

  /**
   * onRowSelect - перехватываем события клика по строкам таблицы
   * @param event - объект события
   * @return void
   */
  onRowSelect( event ) {
    this.newEntity = false;
    this.entity = this.cloneEntity( event.data );
    this.displayDialog = true;
  }

  /**
   * cloneEntity - клонировать сущность(логика от primefaces - table selected)
   * @param e - объект клонируемой сущности
   * @return Product
   */
  cloneEntity( e: any ): any {

    let entity = this.createEntity();
    for ( let prop in e ) {
      entity[prop] = e[prop];
    }

    return entity;
  }

  /**
   * createEntity - создать объект сущности
   * @return T
   */
  createEntity<T>(): any {
    return new class<T extends {}> {};
  }
}
