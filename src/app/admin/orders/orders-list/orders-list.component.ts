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
   * @access public
   * @var items: []
   */
  public orders: Order[];

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
