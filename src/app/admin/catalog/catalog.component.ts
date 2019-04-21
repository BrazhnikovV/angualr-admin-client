import { Component, OnInit } from '@angular/core';
import { RpcService } from '../../services/rpc.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass'],
  providers: [RpcService]
})
export class CatalogComponent implements OnInit {

  constructor(private rpcService: RpcService) { }

  ngOnInit() {
    this.rpcService.getData('get' ).subscribe((response) => {
      console.log('=================================');
      console.log(response);
    });
  }
}
