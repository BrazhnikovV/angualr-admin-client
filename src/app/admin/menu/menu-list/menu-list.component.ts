import { Component, OnInit } from '@angular/core';
import { RpcService } from '../../../services/rpc.service';

/**
 * @class - MenuListComponent
 * @classdesc - компонент для отображения списка пунктов меню
 */
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.sass']
})
export class MenuListComponent implements OnInit {

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
