import { Component, OnInit } from '@angular/core';
import {RpcService} from 'src/app/services/rpc.service';

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
   * @var boolean checked
   */
  private checked: boolean;

  /**
   * @access public
   * @var products: []
   */
  public products: [];

  /**
   * constructor
   * @param rpcService
   */
  constructor( private rpcService: RpcService ) {}

  ngOnInit() {}
}
