import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { RpcService } from '../../../services/rpc.service';
import { Category } from '../../../models/category';
import { TableEntityComponent } from '../../../table-entity/table-entity.component';

/**
 * @class - CategoryListComponent
 * @classdesc - компонент отображения списка категорий
 */
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.sass'],
  providers: [RpcService]
})
export class CategoryListComponent implements OnInit {

  /**
   * @access private
   * @var viewChildren: QueryList<DialogEntityComponent<T>> - объект для управления дочернеми компонентами
   */
  @ViewChildren( TableEntityComponent )
  private viewChildren: QueryList<TableEntityComponent<Category>>;

  /**
   * @access private
   * @var categories: Category
   */
  private categories: Category[];

  /**
   * @access private
   * @var category: Category
   */
  private category: Category = {
    id: null,
    parent_id: null,
    name: null,
    description: null,
    hidden: null,
    created_at: null,
    updated_at: null
  };

  /**
   * constructor
   * @param rpcService
   */
  constructor( private rpcService: RpcService ) {}

  /**
   * @access private
   * @var cols: []
   */
  private cols = [
    { field: 'id', header: 'ID', class: 'th-btn', validate: {
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
    { field: 'hidden', header: 'Hidden', class: '', validate: true },
    { field: 'parent_id', header: 'Nesting', class: '', validate: true },
    { field: 'created_at', header: 'Created', class: '', validate: false }
  ];

  /**
   * ngOnInit
   */
  ngOnInit() {
    this.rpcService.getCategories().subscribe(( response ) => {
      this.categories = response;
    });
  }

  /**
   * onAction - сохранить зменения
   * @return void
   */
  onAction( action: string ) {
    console.log('### CategoryListComponent => onAction()');
    if ( action === 'save' ) {
      this.save();
    }

    if ( action === 'delete' ) {
      this.delete();
    }
  }

  /**
   * save - сохранить изменения или создать новую запись
   * @return void
   */
  private save() {
    console.log('### CategoryListComponent => save()');

    let entity: Category = this.viewChildren.first.entity;
    let id: number = entity.id;

    if ( this.viewChildren.first.newEntity ) {
      this.rpcService.postCategory( entity ).subscribe(( response ) => {
        this.viewChildren.first.entityList.filter( filteredEl => filteredEl.id === null ).map( el => {
          el.id = response.id;
          el.created_at = response.created_at;
        });
      });
    }
    else {
      this.rpcService.putCategory( entity, id ).subscribe(( response ) => {
        console.log(response);
      });
    }
  }

  /**
   * delete - удалить запись из таблицы
   * @return void
   */
  private delete() {
    console.log('### CategoryListComponent => delete()');

    let id: number = this.viewChildren.first.entity.id;
    this.rpcService.deleteCategory( id ).subscribe(( response ) => {
      console.log(response);
    });
  }
}
