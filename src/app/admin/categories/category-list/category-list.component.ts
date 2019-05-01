import { Component, OnInit } from '@angular/core';
import { RpcService } from '../../../services/rpc.service';

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
   * @access public
   * @var categories: []
   */
  public categories: [];

  /**
   * constructor
   * @param rpcService
   */
  constructor( private rpcService: RpcService ) {}

  onClickMe() {
    console.log('You are my hero!');
  }

  ngOnInit() {
    this.rpcService.getData('get', 'categories' ).subscribe((response) => {
      // @ts-ignore
      this.categories = response;
    });
  }
}
