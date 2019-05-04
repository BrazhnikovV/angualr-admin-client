import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

/**
 * @class - RpcService
 * @classdesc - сервис для получения данных ...
 */
@Injectable({
  providedIn: 'root'
})
export class RpcService {

  /**
   *  @access private
   *  @var string heroesUrl - url адрес rest api(rpc)
   */
  private heroesUrl = 'http://shop-rest-api/v1/';

  /**
   *  @access private
   *  @var string token -
   */
  private token = '?access-token=9zfb5fKB4f9rAC-b_HEawN6dSGLO0Krh';

  /**
   * constructor - конструктор
   * @param http - объект для работы с http
   */
  constructor( private http: HttpClient ) {}

  /**
   * getData - получить данные от сервера
   * @param String: requestType - тип запроса
   * @param String: route - маршрут запроса
   * @param Array<string> data - массив данных для post - запроса
   */
  public getData( requestType: string, route: string, data: Array<string> = [] ): Observable<{} | HttpClient> {

    console.log(this.heroesUrl + route + this.token);

    if ( requestType === 'post' ) {
      return this.http.post( this.heroesUrl + route + this.token, data ).pipe(
        tap(response => {}),
        catchError(response => this.handleError(data))
      );
    } else {
      return this.http.get( this.heroesUrl + route + this.token ).pipe(
        tap(response => {}),
        catchError(response => this.handleError(data))
      );
    }
  }

  /**
   * handleError - обработать ошибку получения/отправки данных
   * @param data - данные об ошибке
   */
  private handleError( data: any ) {
    console.log('error data:', data);
    return Observable.create();
  }
}
