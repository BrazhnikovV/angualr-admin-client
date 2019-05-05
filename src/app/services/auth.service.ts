import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

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
  constructor( private http: HttpClient ) {}

  /**
   * login - выпонить аутентификацию на сервере
   * @param reqData - данные для передачи в запросе
   * @return Observable<boolean>
   */
  public login( reqData ): Observable<{} | HttpClient>  {
    return this.http.post( this.apiUrl, reqData )
      .pipe(
        tap(response => {
          this.isLogged = true;
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
  public logout(): boolean {
    return this.isLogged = false;
  }

  /**
   * getIsLogged - получить состояние аутентификации пользователя
   * @return boolean
   */
  public getIsLogged(): boolean {
    return this.isLogged;
  }
}
