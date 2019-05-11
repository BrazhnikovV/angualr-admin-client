import { Component, OnInit } from '@angular/core';
import { RpcService} from 'src/app/services/rpc.service';
import { Order } from '../../../models/order';

/**
 * @class - OrdersListComponent
 * @classdesc - компонент для отображения списка заказов
 */
@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.sass']
})
export class OrdersListComponent implements OnInit {

  /**
   * @access private
   * @var items: []
   */
  private orders: Order[];

  /**
   * @access private
   * @var cols: []
   */
  private cols = [
    { field: 'id', header: 'ID', class: 'th-btn' },
    { field: 'user_id', header: 'UserID', class: '' },
    { field: 'name', header: 'Name', class: '' },
    { field: 'description', header: 'Description', class: '' },
    { field: 'price', header: 'Price', class: '' },
    { field: 'status', header: 'Status', class: '' },
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
    this.rpcService.getOrders().subscribe(( response ) => {
      this.orders = response;
    });
  }
}
