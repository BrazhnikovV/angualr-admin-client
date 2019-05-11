import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { RpcService } from '../../../services/rpc.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorMessageComponent } from 'src/app/validator-message/validator-message.component';

/**
 * @class - PartnersCreateComponent
 * @classdesc - компонент для создания партнера
 */
@Component({
  selector: 'app-partners-create',
  templateUrl: './partners-create.component.html',
  styleUrls: ['./partners-create.component.sass']
})
export class PartnersCreateComponent implements OnInit {

  /**
   * @access private
   * @var viewChildren: QueryList<ValidatorMessageComponent> - список компонентов
   * для отображения сообщений валидатора
   */
  @ViewChildren( ValidatorMessageComponent )
  private viewChildren: QueryList<ValidatorMessageComponent>;

  /**
   *  @access private
   *  @var errors: [] - массив ошибок, полученных при аутентификации
   */
  private errors: [];

  /**
   *  @access private
   *  @var partnerForm: FormGroup - группа валидируемых полей
   */
  private partnerForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4 ),
      Validators.maxLength(128 )
    ]),
    description: new FormControl('' ,[
      Validators.required,
      Validators.minLength(4 ),
      Validators.maxLength(512 )
    ]),
    url: new FormControl('' ,[
      Validators.required,
      Validators.minLength(4 ),
      Validators.maxLength(128 )
    ]),
    hidden: new FormControl('' ,[
      Validators.required,
      Validators.minLength( 0 ),
      Validators.maxLength(1 )
    ])
  });

  /**
   * constructor
   * @param rpcService: RpcService - сервис для выполнения запроса
   * @param router -
   */
  constructor( private rpcService: RpcService, private router: Router) {}

  /**
   * onSubmit - перехватываем события откравки формы
   * @return void
   */
  onSubmit() {
    console.log('### PartnersCreateComponent => onSubmit()');
    this.rpcService.postPartner( this.partnerForm.value ).subscribe(
      response => { this.handleResponse( response ) },error => { this.handleError( error ) }
    );
  }

  /**
   * inputChange - перехватываем событие набора символов в текстовых полях
   * @return void
   */
  inputChange() {
    this.viewChildren.forEach( child => child.ngOnChanges() );
  }

  /**
   * ngOnInit
   */
  ngOnInit() {
    this.partnerForm.get('hidden').setValue(false );
  }

  /**
   * handleError - обработать ошибку получения/отправки данных
   * @param error - данные об ошибке
   */
  private handleError( response: any ) {
    console.log('### PartnersCreateComponent => handleError()');
    this.errors = response.error;
  }

  /**
   * handleResponse -
   * @param response - данные об ошибке
   */
  private handleResponse( response: any ) {
    console.log('### PartnersCreateComponent => handleResponse()');
    console.log('response data:', response);
    this.router.navigate(['/partners/list']);
  }
}
