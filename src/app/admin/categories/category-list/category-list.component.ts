import { Component, OnInit } from '@angular/core';
import { RpcService } from '../../../services/rpc.service';
import { Category } from '../../../models/category';

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
   * @var categories: Category
   */
  private categories: Category[];

  /**
   * @access private
   * @var category: Category
   */
  private category: Category = {
    id: null,
    name: null,
    description: null,
    nesting: null,
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
    { field: 'id', header: 'ID', class: 'th-btn' },
    { field: 'name', header: 'Name', class: '' },
    { field: 'description', header: 'Description', class: '' },
    { field: 'hidden', header: 'Hidden', class: '' },
    { field: 'nesting', header: 'Nesting', class: '' },
    { field: 'created_at', header: 'Created', class: '' }
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
   * save - сохранить зменения
   * @return void
   */
  private save() {
    console.log('### CategoryListComponent => save()');
  }

  /**
   * delete - удалить запись из таблицы
   * @return void
   */
  private delete() {
    console.log('### CategoryListComponent => delete()');
  }
}
