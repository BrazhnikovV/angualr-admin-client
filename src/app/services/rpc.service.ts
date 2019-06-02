import { Order } from '../models/order';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Partner } from '../models/partner';
import { Category } from '../models/category'
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
   * constructor - конструктор
   * @param http - объект для работы с http
   */
  constructor( private http: HttpClient) {}

  /**
   * getCategories - получить список категорий
   * @return Observable<any> | throwError( error )
   */
  public getCategories(): Observable<any> {
    return this.http.get<Category[]>( this.apiUrl + 'categories', this.getAuthHeaders() ).pipe(
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
    return this.http.post<Category[]>( this.apiUrl + 'categories', data, this.getAuthHeaders() ).pipe(
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
    return this.http.put<Category[]>( this.apiUrl + 'categories/' + id, data, this.getAuthHeaders() ).pipe(
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
    return this.http.delete<Category[]>( this.apiUrl + 'categories/' + id, this.getAuthHeaders() ).pipe(
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

    return this.http.get<Product[]>( this.apiUrl + 'products', this.getAuthHeaders() ).pipe(
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
    return this.http.post<Product[]>( this.apiUrl + 'products', data, this.getAuthHeaders() ).pipe(
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
    return this.http.put<Product[]>( this.apiUrl + 'products/' + id, data, this.getAuthHeaders() ).pipe(
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
    return this.http.delete<Product[]>( this.apiUrl + 'products/' + id, this.getAuthHeaders() ).pipe(
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
    return this.http.get<Partner[]>( this.apiUrl + 'partners', this.getAuthHeaders() ).pipe(
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
    return this.http.post<Partner[]>( this.apiUrl + 'partners', data, this.getAuthHeaders() ).pipe(
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
    return this.http.put<Partner[]>( this.apiUrl + 'partners/' + id , data, this.getAuthHeaders() ).pipe(
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
    return this.http.delete<Partner[]>( this.apiUrl + 'partners/' + id, this.getAuthHeaders() ).pipe(
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
    return this.http.get<Order[]>( this.apiUrl + 'orders', this.getAuthHeaders() ).pipe(
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
