import { Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import { RpcService } from 'src/app/services/rpc.service';
import { DialogEntityComponent } from '../dialog-entity/dialog-entity.component';

/**
 * @class - ProductsListComponent
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
   * @var viewChildren: QueryList<DialogEntityComponent<T>> -
   */
  @ViewChildren( DialogEntityComponent )
  private viewChildren: QueryList<DialogEntityComponent<T>>;

  /**
   * @access private
   * @var entityList: Array<T>
   */
  @Input()
  private entityList: Array<T>;

  /**
   * @access private
   * @var product: T
   */
  @Input()
  private entity: T;

  /**
   * @access private
   * @var selectedProduct: T
   */
  private selectedEntity: T;

  /**
   * @access private
   * @var defaultEntity: T
   */
  @Input()
  private defaultEntity: T;

  /**
   * @access private
   * @var cols: []
   */
  @Input()
  private cols = [];

  /**
   * constructor
   * @param rpcService
   */
  constructor( private rpcService: RpcService ) {}

  /**
   * ngOnInit
   */
  ngOnInit() {
    console.log('### TableEntityComponent => ngOnInit()');
    let entity: any = new class<T extends {}> {};
    for ( let prop in this.entity ) {
      entity[prop] = this.entity[prop];
    }
    this.defaultEntity = entity;
  }

  /**
   * showDialogToAdd - показать диалоговое окно для ввода данных
   * @return void
   */
  showDialogToAdd() {
    console.log('### TableEntityComponent => showDialogToAdd()');
    let entity: any = new class<T extends {}> {};
    for ( let prop in this.defaultEntity ) {
      entity[prop] = this.entity[prop];
    }
    this.entity = entity;
    this.viewChildren.forEach( child => child.showDialogToAdd() );
  }

  /**
   * onAction - сохранить зменения
   * @return void
   */
  onAction( action: string ) {
    console.log('### TableEntityComponent => onAction()');

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
    let entities = [...this.entityList];
    entities.push(this.entity);
    this.entityList = entities;
    this.entity = this.defaultEntity;
  }

  /**
   * delete - удалить запись из таблицы
   */
  delete() {
    console.log('### TableEntityComponent => delete()');
    let index = this.entityList.indexOf( this.selectedEntity );
    this.entityList = this.entityList.filter((val, i) => i != index );
  }

  /**
   * onRowSelect - перехватываем события клика по строкам таблицы
   * @param event - объект события
   * @return void
   */
  onRowSelect( event ) {
    console.log('### TableEntityComponent => onRowSelect()');
    this.viewChildren.forEach( child => child.onRowSelect( event ) );
  }
}
