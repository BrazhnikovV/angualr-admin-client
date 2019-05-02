import { Component, OnInit } from '@angular/core';
import {RpcService} from 'src/app/services/rpc.service';

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
  public items: [];

  /**
   * constructor
   * @param rpcService
   */
  constructor( private rpcService: RpcService ) {}

  ngOnInit() {}
}
