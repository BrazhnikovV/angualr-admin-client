import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ValidatorMessageComponent } from 'src/app/validator-message/validator-message.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

/**
 * @class - RegisterComponent
 * @classdesc - компонент для регистрации пользователя
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

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
   *  @var registerForm: FormGroup - группа валидируемых полей
   */
  private registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4 ),
      Validators.maxLength(64 )
    ]),
    password: new FormControl('' ,[
      Validators.required,
      Validators.minLength(4 ),
      Validators.maxLength(64 )
    ]),
    repeat_password: new FormControl('' ,[
      Validators.required,
      Validators.minLength( 4 ),
      Validators.maxLength(64 )
    ]),
    email: new FormControl('' ,[
      Validators.required,
      Validators.minLength( 6 ),
      Validators.maxLength(64 ),
      Validators.email
    ])
  });

  /**
   * constructor
   * @param registerService: RegisterService - сервис для выполнения запроса
   * @param router -
   */
  constructor( private registerService: RegisterService, private router: Router ) {}

  /**
   * onSubmit - перехватываем события откравки формы
   * @return void
   */
  onSubmit() {
    console.log('### UserCreateComponent => onSubmit()');
    this.registerService.register( this.registerForm.value ).subscribe(
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
    console.log('### UserCreateComponent => handleError()');
    this.errors = response.error;
  }

  /**
   * handleResponse -
   * @param response - данные об ошибке
   */
  private handleResponse( response: any ) {
    console.log('### UserCreateComponent => handleResponse()');
    console.log('response data:', response);
    this.router.navigate(['/']);
  }
}
