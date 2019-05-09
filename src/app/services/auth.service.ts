import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { CookiesService } from '@ngx-utils/cookies';
import { Router } from '@angular/router';

/**
 * @class - AuthService
 * @classdesc - сервис для аутентификации пользователя
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   *  @access private
   *  @var isLogged: boolean - статус аутентификации пользователя
   */
  private isLogged: boolean = false;

  /**
   *  @access private
   *  @var string apiUrl - url адрес rest api(rpc)
   */
  private apiUrl = 'http://shop-rest-api/v1/user/login';

  /**
   * constructor
   * @param http - объект для работы с http
   */
  constructor( private http: HttpClient, private cookieService: CookiesService, private router: Router ) {}

  /**
   * login - выпонить аутентификацию на сервере
   * @param reqData - данные для передачи в запросе
   * @return Observable<boolean>
   */
  public login( reqData ): Observable<{} | HttpClient>  {
      return this.http.post( this.apiUrl, reqData )
        .pipe(
          tap(response => {
            this.cookieService.put('token', response.toString() );
            this.router.navigate(['/']);
          }),
          catchError( error => {
            return throwError( error );
          })
        );
  }

  /**
   * logout - выполнить выход из приложения
   * @return boolean
   */
  public logout(): void {
    return this.cookieService.remove('token' );
  }

  /**
   * getIsLogged - получить состояние аутентификации пользователя
   * @return boolean
   */
  public getIsLogged(): boolean {
    return Boolean( this.cookieService.get('token') );
  }
}
