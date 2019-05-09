import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';


/**
 * @class - AppComponent
 * @classdesc - главный компонент приложения
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  /**
   * @access private
   * @var String title
   */
  private title: String = 'angular-admin-panel';

  /**
   * constructor
   * @param authService: AuthService - сервис аутентификации
   */
  constructor( private authService: AuthService, private router: Router ) {}

  /**
   * ngOnInit
   */
  ngOnInit() {

  }

  /**
   * isLogged - выполнить fentynbabrfwb.
   * @return boolean
   */
  private isLogged(): boolean {
    return this.authService.getIsLogged();
  }

  /**
   * logout - выполнить выход из приложения
   * @return boolean
   */
  private logout(): void {
    this.router.navigate(['/']);
    return this.authService.logout();
  }
}
