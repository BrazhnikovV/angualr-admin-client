import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/**
 * @class - RegisterService
 * @classdesc - сервис для регистрации пользователя
 */
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  /**
   *  @access private
   *  @var string apiUrl - url адрес rest api(rpc)
   */
  private apiUrl = 'http://shop-rest-api/v1/user/register';

  /**
   * constructor
   * @param http - объект для работы с http
   */
  constructor( private http: HttpClient ) {}

  /**
   * register - выполнить регистрацию пользователя
   * @param reqData - данные для передачи в запросе
   * @return Observable<boolean>
   */
  public register( reqData ): Observable<{} | HttpClient>  {
    return this.http.post( this.apiUrl, reqData )
      .pipe(
        tap(response => {
          sessionStorage.setItem('token', response['auth_key'].toString());
          sessionStorage.setItem('username', response['username'].toString());
        }),
        catchError( error => {
          return throwError( error );
        })
      );
  }
}
