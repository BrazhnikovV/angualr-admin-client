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
