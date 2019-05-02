import { Component, OnInit } from '@angular/core';
import { RpcService } from 'src/app/services/rpc.service';

/**
 * @class - PartnersListComponent
 * @classdesc - компонент для отображения списка партнеров
 */
@Component({
  selector: 'app-partners-list',
  templateUrl: './partners-list.component.html',
  styleUrls: ['./partners-list.component.sass']
})
export class PartnersListComponent implements OnInit {

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
