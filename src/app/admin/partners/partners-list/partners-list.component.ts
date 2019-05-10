import { Component, OnInit } from '@angular/core';
import { RpcService } from 'src/app/services/rpc.service';
import { Partner } from 'src/app/models/partner';

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
   * @var products: []
   */
  public partners: Partner[];

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
    this.rpcService.getPartners().subscribe(( response ) => {
      this.partners = response;
    });
  }
}
