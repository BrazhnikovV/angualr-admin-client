import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../models/user';

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
   *  @var isLogged: boolean | null -
   */
  private isLogged: boolean | null = null;

  /**
   *  @access private
   *  @var string heroesUrl - url адрес rest api(rpc)
   */
  private heroesUrl = 'http://shop-rest-api/v1/login';

  /**
   * constructor
   * @param http - объект для работы с http
   */
  constructor( private http: HttpClient ) {}

  /**
   * login
   * @param credentials - полномочия
   * @return Observable<boolean>
   */
  public login( credentials ) {
    const data: string = JSON.stringify( credentials );

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post<User[]>( this.heroesUrl, data, httpOptions )
      .pipe(
        tap(response => {
          console.log(response);
        }),
        catchError( this.handleError('Error Auth!') )
      );
  }

  /**
   * logout
   * @return boolean
   */
  public logout(): boolean {
    // !Fixme ...
    return true;
  }

  /**
   * getIsLogged
   * @return boolean
   */
  public getIsLogged(): boolean {
    return this.isLogged;
  }

  private handleError(data: string) {
    return undefined;
  }
}
