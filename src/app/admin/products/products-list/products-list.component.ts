import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import { RpcService } from 'src/app/services/rpc.service';
import { Product } from '../../../models/product';
import {Partner} from '../../../models/partner';
import {TableEntityComponent} from '../../../table-entity/table-entity.component';

/**
 * @class - ProductsListComponent
 * @classdesc - компонент отображения списка продуктов
 */
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {

  /**
   * @access private
   * @var viewChildren: QueryList<DialogEntityComponent<T>> - объект для управления дочернеми компонентами
   */
  @ViewChildren( TableEntityComponent )
  private viewChildren: QueryList<TableEntityComponent<Partner>>;

  /**
   * @access private
   * @var products: []
   */
  private products: Product[];

  /**
   * @access private
   * @var products: Product
   */
  private product: Product = {
    id: null,
    name: null,
    description: null,
    price: null,
    code: null,
    hidden: null,
    created_at: null,
    updated_at: null
  };

  /**
   * @access private
   * @var cols: []
   */
  private cols = [
    { field: 'id', header: 'ID', class: 'th-btn' },
    { field: 'name', header: 'Name', class: '' },
    { field: 'description', header: 'Description', class: '' },
    { field: 'price', header: 'Price', class: '' },
    { field: 'code', header: 'Code', class: '' },
    { field: 'hidden', header: 'Hidden', class: '' },
    { field: 'created_at', header: 'Created', class: '' }
  ];

  /**
   * constructor
   * @param rpcService
   */
  constructor( private rpcService: RpcService ) {}

  /**
   * ngOnInit
   */
  ngOnInit() {
    this.rpcService.getProducts().subscribe(( response ) => {
      this.products = response;
    });
  }

  /**
   * onAction - сохранить зменения
   * @return void
   */
  onAction( action: string ) {
    console.log('### ProductsListComponent => onAction()');
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
  private save() {
    console.log('### ProductsListComponent => save()');

    let entity: Partner = this.viewChildren.first.entity;
    let id: number = entity.id;

    if ( this.viewChildren.first.newEntity ) {
      this.rpcService.postProduct(entity).subscribe(( response ) => {
        console.log(response);
      });
    }
    else {
      this.rpcService.putProduct( entity, id ).subscribe(( response ) => {
        console.log(response);
      });
    }
  }

  /**
   * delete - удалить запись из таблицы
   * @return void
   */
  private delete() {
    console.log('### ProductsListComponent => delete()');

    let id: number = this.viewChildren.first.entity.id;
    this.rpcService.deleteProduct( id ).subscribe(( response ) => {
      console.log(response);
    });
  }
}
