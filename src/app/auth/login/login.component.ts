import {Component, OnInit, ViewChild } from '@angular/core';
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
export class LoginComponent {

  /**
   *  @access private
   *  @var user: User -
   */
  private user: User;

  @ViewChild( ValidatorMessageComponent )
  private validatorMessage: ValidatorMessageComponent;

  /**
   *  @access private
   *  @var loginForm: FormGroup -
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
   * onSubmit
   */
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn( this.loginForm ) ;
  }

  ngOnInit() {}

  inputChange( validatorMessage ) {
    console.log('### LoginComponent => inputChange()');
    console.log(validatorMessage);
    //this.validatorMessage.ngOnChanges();
  }
}
