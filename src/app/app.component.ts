import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, Routes } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  /**
   * @access private
   * @var MenuItem[] itemsBreadCrumb
   */
  private itemsBreadCrumb: MenuItem[] = [];

  /**
   * @access private
   * @var String title
   */
  private title: String = 'angular-admin-panel';

  /**
   * @access private
   * @var Routes config
   */
  private config: Routes;

  /**
   * @access private
   * @var String currentPath
   */
  private currentPath: String;

  /**
   * constructor
   */
  constructor( router: Router ) {
    this.config = router.config;
    this.currentPath = location.pathname;
  }

  ngOnInit() {
    this.itemsBreadCrumb.push({label:'Home', url: '/', icon: 'pi pi-home'})

    this.config.map( item => {
      let breadCrumbName;
      if ( item.hasOwnProperty( 'data' ) ) {
        breadCrumbName = item.data.breadCrumbName;
      }
      if ( this.currentPath === '/' + item.path ) {
        this.itemsBreadCrumb.push({ label: breadCrumbName/*, routerLink: item.path*/ })
      }
    });
  }
}
