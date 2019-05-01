/** ==== Загружаем модули они должны быть подключены в разделе imports директивы NgModule */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PanelMenuModule } from 'primeng/panelmenu';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';

/** ==== Загружаем компоненты они должны быть подключены в разделе declarations директивы NgModule */
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { HeaderComponent } from './admin/header/header.component';
import { SliderComponent } from './admin/slider/slider.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { PartnersComponent } from './admin/partners/partners.component';
import { CategoryListComponent } from './admin/categories/category-list/category-list.component';
import { CategoryCreateComponent } from './admin/categories/category-create/category-create.component';
import { MenuListComponent } from './admin/menu/menu-list/menu-list.component';
import { MenuCreateComponent } from './admin/menu/menu-create/menu-create.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

const appRoutes: Routes = [
  { path: 'menu/list',   component: MenuListComponent, data: {'breadCrumbName':'Список пунктов меню', 'icon':'pi pi-list'} },
  { path: 'menu/create', component: MenuCreateComponent, data: {'breadCrumbName':'Создать пункт меню', 'icon':'pi pi-plus'} },
  { path: 'header',      component: HeaderComponent, data: {'breadCrumbName':''} },
  { path: 'slider',      component: SliderComponent, data: {'breadCrumbName':''} },
  { path: 'orders',      component: OrdersComponent, data: {'breadCrumbName':''} },
  { path: 'category/list',   component: CategoryListComponent, data: {'breadCrumbName':'Список категорий', 'icon':'pi pi-list' } },
  { path: 'category/create', component: CategoryCreateComponent, data: {'breadCrumbName':'Создать категорию', 'icon':'pi pi-plus' } },
  { path: 'partners', component: PartnersComponent, data: {'breadCrumbName':'Партнеры', 'icon':'pi pi-plus' } }
  // { path: '**', component: Page404Component },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    OrdersComponent,
    TopMenuComponent,
    LeftMenuComponent,
    PartnersComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    MenuListComponent,
    MenuCreateComponent,
    BreadcrumbComponent
  ],
  imports: [
    FormsModule,
    TableModule,
    BrowserModule,
    TabMenuModule,
    ButtonModule,
    BreadcrumbModule,
    PanelMenuModule,
    InputTextModule,
    InputSwitchModule,
    InputTextareaModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
