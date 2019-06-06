import { Component, OnInit } from '@angular/core';
import { RpcService } from '../../../services/rpc.service';
import { User} from 'src/app/models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass'],
  providers: [RpcService]
})
export class UsersListComponent implements OnInit {

  /**
   * @access private
   * @var categories: Category
   */
  private users: User[];

  /**
   * @access private
   * @var user: User
   */
  private user: User = {
    id: null,
    username: null,
    email: null,
    status: null,
    created_at: null,
    updated_at: null
  };

  /**
   * constructor
   * @param rpcService
   */
  constructor( private rpcService: RpcService ) {}

  /**
   * @access private
   * @var cols: []
   */
  private cols = [
    { field: 'id', header: 'ID', class: 'th-btn' },
    { field: 'username', header: 'Username', class: '' },
    { field: 'email', header: 'Email', class: '' },
    { field: 'status', header: 'Status', class: '' },
    { field: 'created_at', header: 'Created', class: '' },
    { field: 'updated_at', header: 'Updated', class: '' }
  ];

  /**
   * ngOnInit
   */
  ngOnInit() {
    this.rpcService.getUsers().subscribe(( response ) => {
      this.users = response;
    });
  }
}
