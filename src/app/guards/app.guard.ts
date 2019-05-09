import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';

/**
 * @class - AppGuard
 * @classdesc - главный страж приложения
 */
@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {

  /**
   * constructor
   * @param authService - сервис атентификации
   */
  constructor ( private authService: AuthService ) {}

  /**
   * canActivate
   * @override
   * @param next - ActivatedRouteSnapshot
   * @param state - RouterStateSnapshot
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.getIsLogged();
  }
}
