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
   * @var boolean checked
   */
  private checked: boolean;

  /**
   * @access private
   * @var categories: Category
   */
  private categories: Category[];

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
    { field: 'created', header: 'Created', class: '' }
  ];

  /**
   * onClickMe
   */
  onClickMe() {
    console.log('You are my hero!');
  }

  /**
   * ngOnInit
   */
  ngOnInit() {
    this.rpcService.getCategories().subscribe(( response ) => {
      this.categories = response;
    });
  }
}
