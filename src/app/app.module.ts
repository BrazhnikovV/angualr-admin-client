/** ==== Загружаем модули они должны быть подключены в разделе imports директивы NgModule */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserCookiesModule } from '@ngx-utils/cookies/browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PanelMenuModule } from 'primeng/panelmenu';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';

/** ==== Загружаем компоненты они должны быть подключены в разделе declarations директивы NgModule */
import { AppGuard } from './guards/app.guard';
import { AppComponent } from './app.component';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/primeng';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { HeaderComponent } from './admin/header/header.component';
import { SliderComponent } from './admin/slider/slider.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { OrdersListComponent } from './admin/orders/orders-list/orders-list.component';
import { ProductsListComponent } from './admin/products/products-list/products-list.component';
import { PartnersListComponent } from './admin/partners/partners-list/partners-list.component';
import { CategoryListComponent } from './admin/categories/category-list/category-list.component';
import { ProductsCreateComponent } from './admin/products/products-create/products-create.component';
import { PartnersCreateComponent } from './admin/partners/partners-create/partners-create.component';
import { CategoryCreateComponent } from './admin/categories/category-create/category-create.component';
import { ValidatorMessageComponent } from './validator-message/validator-message.component';
import { ValidatorNetworkComponent } from './validator-network/validator-network.component';


const appRoutes: Routes = [
  {
    path: 'header',
    component: HeaderComponent,
    data: {'breadCrumbName':'Шапка сайта'},
    canActivate:[AppGuard] },
  {
    path: 'slider',
    component: SliderComponent,
    data: {'breadCrumbName':''},
    canActivate:[AppGuard] },
  {
    path: 'orders',
    component: OrdersListComponent,
    data: {'breadCrumbName':'Заказы'},
    canActivate:[AppGuard]
  },
  { path: 'products/list',
    component: ProductsListComponent,
    data: {'breadCrumbName':'Список продуктов', 'icon':'pi pi-list'},
    canActivate:[AppGuard]
  },
  {
    path: 'products/create',
    component: ProductsCreateComponent,
    data: {'breadCrumbName':'Создать продукт', 'icon':'pi pi-plus'},
    canActivate:[AppGuard]
  },
  {
    path: 'category/list',
    component: CategoryListComponent,
    data: {'breadCrumbName':'Список категорий', 'icon':'pi pi-list' },
    canActivate:[AppGuard]
  },
  {
    path: 'category/create',
    component: CategoryCreateComponent,
    data: {'breadCrumbName':'Создать категорию', 'icon':'pi pi-plus' },
    canActivate:[AppGuard]
  },
  {
    path: 'partners/list',
    component: PartnersListComponent,
    data: {'breadCrumbName':'Список партнеров', 'icon':'pi pi-plus' },
    canActivate:[AppGuard]
  },
  {
    path: 'partners/create',
    component: PartnersCreateComponent,
    data: {'breadCrumbName':'Добавить партнера', 'icon':'pi pi-plus' },
    canActivate:[AppGuard]
  }
  // { path: '**', component: Page404Component },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    SliderComponent,
    TopMenuComponent,
    LeftMenuComponent,
    OrdersListComponent,
    BreadcrumbComponent,
    OrdersListComponent,
    ProductsListComponent,
    PartnersListComponent,
    CategoryListComponent,
    PartnersListComponent,
    CategoryCreateComponent,
    PartnersCreateComponent,
    ProductsCreateComponent,
    ValidatorMessageComponent,
    ValidatorNetworkComponent,
  ],
  imports: [
    FormsModule,
    TableModule,
    ButtonModule,
    BrowserModule,
    TabMenuModule,
    MessageModule,
    MessagesModule,
    BreadcrumbModule,
    PanelMenuModule,
    InputTextModule,
    InputSwitchModule,
    InputTextareaModule,
    HttpClientModule,
    BrowserCookiesModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
