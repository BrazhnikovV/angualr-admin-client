import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import { RpcService } from 'src/app/services/rpc.service';
import { Partner } from 'src/app/models/partner';
import { TableEntityComponent } from 'src/app/table-entity/table-entity.component';

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
   * @access private
   * @var viewChildren: QueryList<DialogEntityComponent<T>> - объект для управления дочернеми компонентами
   */
  @ViewChildren( TableEntityComponent )
  private viewChildren: QueryList<TableEntityComponent<Partner>>;

  /**
   * @access private
   * @var products: []
   */
  private partners: Partner[];

  /**
   * @access private
   * @var partner: Partner
   */
  private partner: Partner = {
    id: null,
    name: null,
    url: null,
    description: null,
    hidden: null,
    created_at: null,
    updated_at: null
  };

  /**
   * @access private
   * @var cols: []
   */
  private cols = [
    { field: 'id', header: 'ID', class: 'th-btn', validate: {
        minLength: 1
      }
    },
    { field: 'name', header: 'Name', class: '', validate: {
        required: true, minLength: 4, maxLength: 128
      }
    },
    { field: 'url', header: 'Url', class: '', validate: true },
    { field: 'description', header: 'Description', class: '', validate: {
        required: true, minLength: 4, maxLength: 128
      }
    },
    { field: 'hidden', header: 'Hidden', class: '', validate: true },
    { field: 'created_at', header: 'Created', class: '', validate: false }
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
    this.rpcService.getPartners().subscribe(( response ) => {
      this.partners = response;
    });
  }

  /**
   * onAction - сохранить зменения
   * @return void
   */
  onAction( action: string ) {
    console.log('### PartnersListComponent => onAction()');
    if ( action === 'save' ) {
      this.save();
    }

    if ( action === 'delete' ) {
      this.delete();
    }
  }

  /**
   * save - сохранить зменения
   * @return void
   */
  private save() {
    console.log('### PartnersListComponent => save()');

    let entity: Partner = this.viewChildren.first.entity;
    let id: number = entity.id;

    if ( this.viewChildren.first.newEntity ) {
      this.rpcService.postPartner(entity).subscribe(( response ) => {
        console.log(response);
      });
    }
    else {
      this.rpcService.putPartner( entity, id ).subscribe(( response ) => {
        console.log(response);
      });
    }
  }

  /**
   * delete - удалить запись из таблицы
   * @return void
   */
  private delete() {
    console.log('### PartnersListComponent => delete()');

    let id: number = this.viewChildren.first.entity.id;
    this.rpcService.deletePartner( id ).subscribe(( response ) => {
      console.log(response);
    });
  }
}
