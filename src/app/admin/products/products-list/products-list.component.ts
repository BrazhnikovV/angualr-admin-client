import { Component, OnInit } from '@angular/core';
import { RpcService } from 'src/app/services/rpc.service';
import { Product } from '../../../models/product';

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
  public products: Product[];

  /**
   * constructor
   * @param rpcService
   */
  constructor( private rpcService: RpcService ) {}

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
    this.rpcService.getProducts().subscribe(( response ) => {
      this.products = response;
    });
  }
}
