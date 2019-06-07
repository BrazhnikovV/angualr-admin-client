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
    сcategory_id: null,
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
    { field: 'id', header: 'ID', class: 'th-btn', validate: {
        minLength: 1
      }
    },
    { field: 'category_id', header: 'CategoryID', class: '', validate: {
        minLength: 1
      }
    },
    { field: 'name', header: 'Name', class: '', validate: {
        required: true, minLength: 4, maxLength: 128
      }
    },
    { field: 'description', header: 'Description', class: '', validate: {
        required: true, minLength: 4, maxLength: 128
      }
    },
    { field: 'price', header: 'Price', class: '', validate: true },
    { field: 'code', header: 'Code', class: '', validate: true },
    { field: 'hidden', header: 'Hidden', class: '', validate: true },
    { field: 'created_at', header: 'Created', class: '', validate: false }
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
        this.viewChildren.first.entityList.filter( filteredEl => filteredEl.id === null ).map( el => {
          el.id = response.id;
          el.created_at = response.created_at;
        });
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
