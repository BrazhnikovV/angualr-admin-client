import { Component, OnInit } from '@angular/core';
import { RpcService } from '../../../services/rpc.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.sass'],
  providers: [RpcService]
})
export class CategoryListComponent implements OnInit {

  constructor(private rpcService: RpcService) {}

  private categories: [];

  ngOnInit() {
    this.rpcService.getData('get', 'categories' ).subscribe((response) => {
      // @ts-ignore
      this.categories = response;
    });
  }
}
