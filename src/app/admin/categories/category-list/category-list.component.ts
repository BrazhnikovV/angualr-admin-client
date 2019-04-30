/* tslint:disable:no-redundant-jsdoc */
import { Component, OnInit } from '@angular/core';
import { RpcService } from '../../../services/rpc.service';

/**
 * @classdesc - список категорий
 */
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.sass'],
  providers: [RpcService]
})
export class CategoryListComponent implements OnInit {

  /**
   * constructor
   * @param rpcService
   */
  constructor( private rpcService: RpcService ) {}

  /**
   * @access public
   * @var categories: []
   */
  public categories: [];

  ngOnInit() {
    this.rpcService.getData('get', 'categories' ).subscribe((response) => {
      // @ts-ignore
      this.categories = response;
    });
  }
}
