import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { RpcService } from '../../../services/rpc.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorMessageComponent } from 'src/app/validator-message/validator-message.component';

/**
 * @class - CategoryCreateComponent
 * @classdesc - компонент для создания категории
 */
@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.sass']
})
export class CategoryCreateComponent implements OnInit {

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
   *  @var categoryForm: FormGroup - группа валидируемых полей
   */
  private categoryForm: FormGroup = new FormGroup({
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
    console.log('### CategoryCreateComponent => onSubmit()');
    this.rpcService.postCategory( this.categoryForm.value ).subscribe(
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
  ngOnInit() {}

  /**
   * handleError - обработать ошибку получения/отправки данных
   * @param error - данные об ошибке
   */
  private handleError( response: any ) {
    console.log('### CategoryCreateComponent => handleError()');
    this.errors = response.error;
  }

  /**
   * handleResponse -
   * @param response - данные об ошибке
   */
  private handleResponse( response: any ) {
    console.log('### CategoryCreateComponent => handleResponse()');
    console.log('response data:', response);
    this.router.navigate(['/category/list']);
  }
}
