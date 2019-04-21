import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuComponent } from './admin/menu/menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { HeaderComponent } from './admin/header/header.component';
import { SliderComponent } from './admin/slider/slider.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { CatalogComponent } from './admin/catalog/catalog.component';
import { PartnersComponent } from './admin/partners/partners.component';

const appRoutes: Routes = [
  { path: 'menu',     component: MenuComponent },
  { path: 'header',   component: HeaderComponent },
  { path: 'slider',   component: SliderComponent },
  { path: 'orders',   component: OrdersComponent },
  { path: 'catalog',  component: CatalogComponent },
  { path: 'partners', component: PartnersComponent }
  // { path: '**', component: Page404Component },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    SliderComponent,
    OrdersComponent,
    TopMenuComponent,
    CatalogComponent,
    LeftMenuComponent,
    PartnersComponent,
  ],
  imports: [
    BrowserModule,
    TabMenuModule,
    PanelMenuModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
