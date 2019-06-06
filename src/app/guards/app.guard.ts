import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { RegisterService } from '../services/register.service';

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
  constructor ( private authService: AuthService, private router: Router ) {}

  /**
   * canActivate
   * @override
   * @param next - ActivatedRouteSnapshot
   * @param state - RouterStateSnapshot
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if ( this.authService.getIsLogged() ) {
      return true;
    }
    else {
      return this.router.navigate(['/login']);
    }
  }
}
