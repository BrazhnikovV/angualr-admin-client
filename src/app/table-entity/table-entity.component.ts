import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { DialogEntityComponent } from '../dialog-entity/dialog-entity.component';

/**
 * @class - ProductsListComponent, T - обобщенный тип для сущностей
 * @classdesc - компонент отображения списка продуктов
 */
@Component({
  selector: 'app-table-entity',
  templateUrl: './table-entity.component.html',
  styleUrls: ['./table-entity.component.sass']
})
export class TableEntityComponent<T extends {}> implements OnInit {

  /**
   * @access private
   * @var childEvent: EventEmitter<string>
   */
  @Output()
  private childEvent = new EventEmitter<string>();

  /**
   * @access private
   * @var viewChildren: QueryList<DialogEntityComponent<T>> - объект для управления дочернеми компонентами
   */
  @ViewChildren( DialogEntityComponent )
  private viewChildren: QueryList<DialogEntityComponent<T>>;

  /**
   * @access private
   * @var entityList: Array<T> - массив сущностей(записи в таблице)
   */
  @Input()
  private entityList: Array<T>;

  /**
   * @access private
   * @var product: T - текущая сущность(выбранная строка, новая строка)
   */
  @Input()
  public entity: T;

  /**
   * @access private
   * @var selectedProduct: T - выбранная строка
   */
  private selectedEntity: T;

  /**
   * @access private
   * @var defaultEntity: T - скелет сущности, для сброса диалового окна при создании новой записи
   */
  private defaultEntity: T;

  /**
   * @access private
   * @var newEntity: boolean - флаг новой сущности
   */
  public newEntity: boolean;

  /**
   * @access private
   * @var cols: [] - структура таблицы(передается вызывающим компонентом)
   */
  @Input()
  private cols = [];

  /**
   * constructor
   */
  constructor() {}

  /**
   * ngOnInit
   */
  ngOnInit() {
    this.defaultEntity = this.cloneEntity( this.entity );
  }

  /**
   * showDialogToAdd - показать диалоговое окно для ввода данных
   * @return void
   */
  showDialogToAdd() {
    this.newEntity = true;
    this.entity = this.cloneEntity( this.defaultEntity );
    this.viewChildren.first.displayDialog = true;
  }

  /**
   * onAction - сохранить зменения
   * @return void
   */
  onAction( action: string ) {

    if ( action === 'save' ) {
      this.save();
    }

    if ( action === 'delete' ) {
      this.delete();
    }
  }

  /**
   * save - сохранить зменения
   * @return void
   */
  save() {
    console.log('### TableEntityComponent => save()');

    // !!! Подумать над оптимизацией данного алгоритма
    let maxId = this.entityList.reduce( ( max, p ) => p['id'] > max ? p['id'] : max, this.entityList[0]['id'] );
    //---------------------------------------------------------------------------------------------------------

    let entities = [...this.entityList];
    ( this.newEntity ) ? this.entity['id'] = ++maxId : null;
    ( this.newEntity ) ? entities.unshift( this.entity )
                       : entities[this.entityList.indexOf( this.selectedEntity )] = this.entity;

    this.viewChildren.first.displayDialog = false;
    // !!!Важно: событие в родительском компоненте нужно вызвать до очистки поля сущности
    this.childEvent.emit( 'save' );

    this.entity = this.defaultEntity;
    this.entityList = entities;
  }

  /**
   * delete - удалить запись из таблицы
   */
  delete() {
    this.viewChildren.first.displayDialog = false;

    let index = this.entityList.indexOf( this.selectedEntity );
    this.entityList = this.entityList.filter((val, i) => i != index );

    this.childEvent.emit( 'delete' );
    this.entity = null;
  }

  /**
   * onRowSelect - перехватываем события клика по строкам таблицы
   * @param event - объект события
   * @return void
   */
  onRowSelect( event ) {
    this.newEntity = false;
    this.entity = this.cloneEntity( event.data );
    this.viewChildren.first.displayDialog = true;
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
