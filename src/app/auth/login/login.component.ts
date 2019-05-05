import {Component, OnInit, ViewChildren, QueryList} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { ValidatorMessageComponent } from '../../validator-message/validator-message.component';

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
   *  @access private
   *  @var user: User - модель пользователя
   */
  private user: User;

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
   * constructor
   */
  constructor() {}

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
    console.log(this.loginForm);
  }

  /**
   * inputChange - перехватываем событие набора символов в текстовых полях
   * @return void
   */
  inputChange() {
    this.viewChildren.forEach( child => child.ngOnChanges());
  }
}
