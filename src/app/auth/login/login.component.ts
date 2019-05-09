import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorMessageComponent } from '../../validator-message/validator-message.component';
import { AuthService } from '../../services/auth.service';

/**
 * @class - LoginComponent
 * @classdesc - компонент для отображения страницы аутентификации
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  /**
   * @access private
   * @var viewChildren: QueryList<ValidatorMessageComponent> - список компонентов
   * для отображения сообщений валидатора
   */
  @ViewChildren( ValidatorMessageComponent )
  private viewChildren: QueryList<ValidatorMessageComponent>;

  /**
   *  @access private
   *  @var loginForm: FormGroup - группа валидируемых полей
   */
  private loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4 ),
      Validators.maxLength(16 )
    ]),
    password: new FormControl('' ,[
      Validators.required,
      Validators.minLength(4 ),
      Validators.maxLength(16 )
    ])
  });

  /**
   *  @access private
   *  @var errors: [] - массив ошибок, полученных при аутентификации
   */
  private errors: [];

  /**
   * constructor
   * @param authService: AuthService - сервис для выполнения запроса на аутентификацию
   */
  constructor( private authService: AuthService ) {}

  /**
   * ngOnInit
   * @return void
   */
  ngOnInit() {}

  /**
   * onSubmit - перехватываем события откравки формы
   * @return void
   */
  onSubmit() {
    console.log('### LoginComponent => onSubmit()');

    this.authService.login( this.loginForm.value ).subscribe(
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
   * handleError - обработать ошибку получения/отправки данных
   * @param error - данные об ошибке
   */
  private handleError( response: any ) {
    console.log('### LoginComponent => handleError()');
    console.log('error data:', response);
    this.errors = response.error;
  }

  /**
   * handleResponse -
   * @param response - данные об ошибке
   */
  private handleResponse( response: any ) {
    console.log('### LoginComponent => handleResponse()');
    console.log('response data:', response);
  }
}
