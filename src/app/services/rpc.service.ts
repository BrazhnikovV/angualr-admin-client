import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RpcService {

  /**
   *  @access private
   *  @var string heroesUrl - url адрес rest api(rpc)
   */
  private heroesUrl = 'http://shop-rest-api/v1/orders?access-token=9zfb5fKB4f9rAC-b_HEawN6dSGLO0Krh';

  /**
   * constructor - конструктор
   * @param http - объект для работы с http
   */
  constructor( private http: HttpClient ) {}

  /**
   * getData - получить данные от сервера
   * @param requestType - тип запроса
   * @param data - массив данных для post - запроса
   */
  public getData( requestType: string, data: Array<string> = [] ) {

    if ( requestType === 'post' ) {
      return this.http.post( this.heroesUrl, data ).pipe(
        tap(response => {}),
        catchError(response => this.handleError(data))
      );
    } else {
      return this.http.get( this.heroesUrl ).pipe(
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
