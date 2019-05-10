import { Order } from '../models/order';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Partner } from '../models/partner';
import { Category } from '../models/category'
import { Observable, throwError} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

/**
 * @class - RpcService
 * @classdesc - сервис для получения данных ...
 */
@Injectable({ providedIn: 'root' })
export class RpcService {

  /**
   *  @access private
   *  @var string heroesUrl - url адрес rest api(rpc)
   */
  private apiUrl = 'http://shop-rest-api/v1/';

  /**
   *  @access private
   *  @var string token -
   */
  private token = '?access-token=9zfb5fKB4f9rAC-b_HEawN6dSGLO0Krh';

  /**
   * constructor - конструктор
   * @param http - объект для работы с http
   */
  constructor( private http: HttpClient) {}

  /**
   * getCategories - получить список категорий
   * @return Observable<any> | throwError( error )
   */
  public getCategories(): Observable<any> {
    return this.http.get<Category[]>( this.apiUrl + 'categories' + this.token ).pipe(
      tap(response => {}),
      catchError(error => {
        return throwError( error );
      })
    );
  }

  /**
   * postCategory - создать категорию
   * @param data: Array<string> - массив данных для отправки на сервер
   * @return Observable<any> | throwError( error )
   */
  public postCategory(  data: Array<string> = [] ): Observable<any> {
    return this.http.post<Category[]>( this.apiUrl + 'categories' + this.token, data ).pipe(
      tap(response => {}),
      catchError(error => {
        return throwError( error );
      })
    );
  }

  /**
   * getProducts - получить список продуктов
   * @return Observable<any> | throwError( error )
   */
  public getProducts(): Observable<any> {
    return this.http.get<Product[]>( this.apiUrl + 'products' + this.token ).pipe(
      tap(response => {}),
      catchError(error => {
        return throwError( error );
      })
    );
  }

  /**
   * postProduct - создать продукт
   * @param data: Array<string> - массив данных для отправки на сервер
   * @return Observable<any> | throwError( error )
   */
  public postProduct(  data: Array<string> = [] ): Observable<any> {
    return this.http.post<Product[]>( this.apiUrl + 'products' + this.token, data ).pipe(
      tap(response => {}),
      catchError(error => {
        return throwError( error );
      })
    );
  }

  /**
   * getPartners - получить список партнеров
   * @return Observable<any> | throwError( error )
   */
  public getPartners(): Observable<any> {
    return this.http.get<Partner[]>( this.apiUrl + 'partners' + this.token ).pipe(
      tap(response => {}),
      catchError(error => {
        return throwError( error );
      })
    );
  }

  /**
   * postPartner - создать партнера
   * @param data: Array<string> - массив данных для отправки на сервер
   * @return Observable<any> | throwError( error )
   */
  public postPartner(  data: Array<string> = [] ): Observable<any> {
    return this.http.post<Partner[]>( this.apiUrl + 'partners' + this.token, data ).pipe(
      tap(response => {}),
      catchError(error => {
        return throwError( error );
      })
    );
  }

  /**
   * getOrders - получить данные от сервера
   * @return Observable<any> | throwError( error )
   */
  public getOrders(): Observable<any> {
    return this.http.get<Order[]>( this.apiUrl + 'orders' + this.token ).pipe(
      tap(response => {}),
      catchError(error => {
        return throwError( error );
      })
    );
  }
}
