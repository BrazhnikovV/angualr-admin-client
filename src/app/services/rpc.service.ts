import { Order } from '../models/order';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Partner } from '../models/partner';
import { Category } from '../models/category'
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../models/user';

/**
 * @class - RpcService
 * @classdesc - сервис для получения данных ...
 */
@Injectable({ providedIn: 'root' })
export class RpcService {

  /**
   *  @access private
   *  @var string apiCrudUrl - url адрес rest api(rpc)
   */
  private apiCrudUrl = 'http://shop-rest-api/v1/';

  /**
   *  @access private
   *  @var string apiReadUrl - url адрес rest api(rpc)
   */
  private apiReadUrl = 'http://shop-rest-api/v2/';

  /**
   * constructor - конструктор
   * @param http - объект для работы с http
   */
  constructor( private http: HttpClient) {}

  /**
   * getUsers - получить список пользователей
   * @return Observable<any> | throwError( error )
   */
  public getUsers(): Observable<any> {
    return this.http.get<User[]>( this.apiCrudUrl + 'users', this.getAuthHeaders() ).pipe(
      tap(response => {}),
      catchError(error => {
        return throwError( error );
      })
    );
  }

  /**
   * getCategories - получить список категорий
   * @return Observable<any> | throwError( error )
   */
  public getCategories(): Observable<any> {
    return this.http.get<Category[]>( this.apiCrudUrl + 'categories', this.getAuthHeaders() ).pipe(
      tap(response => {}),
      catchError(error => {
        return throwError( error );
      })
    );
  }

  /**
   * getNoParrentsCategories - получить список категорий не родительских
   * @return Observable<any> | throwError( error )
   */
  public getNoParrentsCategories(): Observable<any> {
    return this.http.get<Category[]>( this.apiReadUrl + 'categories/noparrentlist', this.getAuthHeaders() ).pipe(
      tap(response => {}),
      catchError(error => {
        return throwError( error );
      })
    );
  }

  /**
   * postCategory - создать категорию
   * @param data: any - массив данных для отправки на сервер
   * @return Observable<any> | throwError( error )
   */
  public postCategory(  data: any ): Observable<any> {
    return this.http.post<Category[]>( this.apiCrudUrl + 'categories', data, this.getAuthHeaders() ).pipe(
      tap(response => {}),
      catchError(error => {
        return throwError( error );
      })
    );
  }

  /**
   * putCategory - обновить категорию
   * @param data: any - объект данных для отправки на сервер
   * @param id: number - идентификатор записи
   * @return Observable<any> | throwError( error )
   */
  public putCategory(  data: {}, id: number ): Observable<any> {
    return this.http.put<Category[]>( this.apiCrudUrl + 'categories/' + id, data, this.getAuthHeaders() ).pipe(
      tap(response => {}),
      catchError(error => {
        return throwError( error );
      })
    );
  }

  /**
   * deleteCategory - удалить категорию
   * @param data: any - объект данных для отправки на сервер
   * @param id: number - идентификатор записи
   * @return Observable<any> | throwError( error )
   */
  public deleteCategory( id: number ): Observable<any> {
    return this.http.delete<Category[]>( this.apiCrudUrl + 'categories/' + id, this.getAuthHeaders() ).pipe(
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

    return this.http.get<Product[]>( this.apiCrudUrl + 'products', this.getAuthHeaders() ).pipe(
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
  public postProduct(  data: any ): Observable<any> {
    return this.http.post<Product[]>( this.apiCrudUrl + 'products', data, this.getAuthHeaders() ).pipe(
      tap(response => {}),
      catchError(error => {
        return throwError( error );
      })
    );
  }

  /**
   * putProduct - обновить продукт
   * @param data: Array<string> - массив данных для отправки на сервер
   * @param id: number - идентификатор записи
   * @return Observable<any> | throwError( error )
   */
  public putProduct(  data: {}, id: number ): Observable<any> {
    return this.http.put<Product[]>( this.apiCrudUrl + 'products/' + id, data, this.getAuthHeaders() ).pipe(
      tap(response => {}),
      catchError(error => {
        return throwError( error );
      })
    );
  }

  /**
   * deleteProduct - удалить продукт
   * @param id: number - идентификатор записи
   * @return Observable<any> | throwError( error )
   */
  public deleteProduct( id: number ): Observable<any> {
    return this.http.delete<Product[]>( this.apiCrudUrl + 'products/' + id, this.getAuthHeaders() ).pipe(
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
    return this.http.get<Partner[]>( this.apiCrudUrl + 'partners', this.getAuthHeaders() ).pipe(
      tap(response => {}),
      catchError(error => {
        return throwError( error );
      })
    );
  }

  /**
   * postPartner - создать партнера
   * @param data: any - массив данных для отправки на сервер
   * @return Observable<any> | throwError( error )
   */
  public postPartner(  data: any ): Observable<any> {
    return this.http.post<Partner[]>( this.apiCrudUrl + 'partners', data, this.getAuthHeaders() ).pipe(
      tap(response => {}),
      catchError(error => {
        return throwError( error );
      })
    );
  }

  /**
   * putPartner - обновить партнера
   * @param data: Array<string> - массив данных для отправки на сервер
   * @param id: number - идентификатор записи
   * @return Observable<any> | throwError( error )
   */
  public putPartner(  data: {}, id: number ): Observable<any> {
    return this.http.put<Partner[]>( this.apiCrudUrl + 'partners/' + id , data, this.getAuthHeaders() ).pipe(
      tap(response => {}),
      catchError(error => {
        return throwError( error );
      })
    );
  }

  /**
   * deletePartner - удалить партнера
   * @param id: number - идентификатор записи
   * @return Observable<any> | throwError( error )
   */
  public deletePartner( id: number ): Observable<any> {
    return this.http.delete<Partner[]>( this.apiCrudUrl + 'partners/' + id, this.getAuthHeaders() ).pipe(
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
    return this.http.get<Order[]>( this.apiCrudUrl + 'orders', this.getAuthHeaders() ).pipe(
      tap(response => {}),
      catchError(error => {
        return throwError( error );
      })
    );
  }

  /**
   * getOrders - получить данные от сервера
   * @return {}
   */
  private getAuthHeaders(): {} {

    let hash = btoa( sessionStorage.getItem('token') + ':' );
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': "Basic " + hash
      })
    };

    return httpOptions;
  }
}
