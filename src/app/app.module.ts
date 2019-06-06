/** ==== Загружаем модули они должны быть подключены в разделе imports директивы NgModule */
import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';

/** ==== Загружаем компоненты они должны быть подключены в разделе declarations директивы NgModule */
import { MessageService } from 'primeng/api';
import { AppGuard } from './guards/app.guard';
import { AppComponent } from './app.component';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/primeng';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { HeaderComponent } from './admin/header/header.component';
import { SliderComponent } from './admin/slider/slider.component';
import { RegisterComponent } from './register/register.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { TableEntityComponent } from './table-entity/table-entity.component';
import { DialogEntityComponent } from './dialog-entity/dialog-entity.component';
import { UsersListComponent } from './admin/user/users-list/users-list.component';
import { ValidatorToastComponent } from './validator-toast/validator-toast.component';
import { OrdersListComponent } from './admin/orders/orders-list/orders-list.component';
import { ValidatorMessageComponent } from './validator-message/validator-message.component';
import { ValidatorNetworkComponent } from './validator-network/validator-network.component';
import { ProductsListComponent } from './admin/products/products-list/products-list.component';
import { PartnersListComponent } from './admin/partners/partners-list/partners-list.component';
import { CategoryListComponent } from './admin/categories/category-list/category-list.component';
import { ProductsCreateComponent } from './admin/products/products-create/products-create.component';
import { PartnersCreateComponent } from './admin/partners/partners-create/partners-create.component';
import { CategoryCreateComponent } from './admin/categories/category-create/category-create.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {'breadCrumbName':'Главная'},
    canActivate:[AppGuard]
  },
  {
    path: 'header',
    component: HeaderComponent,
    data: {'breadCrumbName':'Шапка сайта'},
    canActivate:[AppGuard]
  },
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
  {
    path: 'users',
    component: UsersListComponent,
    data: {'breadCrumbName':'Пользователи'},
    canActivate:[AppGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {'breadCrumbName':'Регистрация'},
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {'breadCrumbName':'Войти'},
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
    TableEntityComponent,
    DialogEntityComponent,
    ValidatorToastComponent,
    UsersListComponent,
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
    FormsModule,
    TableModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    BrowserModule,
    MessageModule,
    ToolbarModule,
    MessagesModule,
    PanelMenuModule,
    InputTextModule,
    BreadcrumbModule,
    ScrollPanelModule,
    InputSwitchModule,
    InputTextareaModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
