// tslint:disable-next-line:import-spacing
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGuard } from '../guards/app.guard';
import { HomeComponent } from '../home/home.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../auth/login/login.component';
import { HeaderComponent } from '../admin/header/header.component';
import { SliderComponent } from '../admin/slider/slider.component';
import { UsersListComponent } from '../admin/user/users-list/users-list.component';
import { OrdersListComponent } from '../admin/orders/orders-list/orders-list.component';
import { PartnersListComponent } from '../admin/partners/partners-list/partners-list.component';
import { ProductsListComponent } from '../admin/products/products-list/products-list.component';
import { CategoryListComponent } from '../admin/categories/category-list/category-list.component';
import { ProductsCreateComponent } from '../admin/products/products-create/products-create.component';
import { PartnersCreateComponent } from '../admin/partners/partners-create/partners-create.component';
import { CategoryCreateComponent } from '../admin/categories/category-create/category-create.component';

/**
 * @var routes: Routes - маршруты приложения
 */
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {'breadCrumbName': 'Главная'},
    canActivate: [AppGuard]
  },
  {
    path: 'header',
    component: HeaderComponent,
    data: {'breadCrumbName': 'Шапка сайта'},
    canActivate: [AppGuard]
  },
  {
    path: 'slider',
    component: SliderComponent,
    data: {'breadCrumbName': ''},
    canActivate: [AppGuard] },
  {
    path: 'orders',
    component: OrdersListComponent,
    data: {'breadCrumbName': 'Заказы'},
    canActivate: [AppGuard]
  },
  {
    path: 'users',
    component: UsersListComponent,
    data: {'breadCrumbName': 'Пользователи'},
    canActivate: [AppGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {'breadCrumbName': 'Регистрация'},
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {'breadCrumbName': 'Войти'},
  },
  { path: 'products/list',
    component: ProductsListComponent,
    data: {'breadCrumbName': 'Список продуктов', 'icon': 'pi pi-list'},
    canActivate: [AppGuard]
  },
  {
    path: 'products/create',
    component: ProductsCreateComponent,
    data: {'breadCrumbName': 'Создать продукт', 'icon': 'pi pi-plus'},
    canActivate: [AppGuard]
  },
  {
    path: 'category/list',
    component: CategoryListComponent,
    data: {'breadCrumbName': 'Список категорий', 'icon': 'pi pi-list' },
    canActivate: [AppGuard]
  },
  {
    path: 'category/create',
    component: CategoryCreateComponent,
    data: {'breadCrumbName': 'Создать категорию', 'icon': 'pi pi-plus' },
    canActivate: [AppGuard]
  },
  {
    path: 'partners/list',
    component: PartnersListComponent,
    data: {'breadCrumbName': 'Список партнеров', 'icon': 'pi pi-plus' },
    canActivate: [AppGuard]
  },
  {
    path: 'partners/create',
    component: PartnersCreateComponent,
    data: {'breadCrumbName': 'Добавить партнера', 'icon': 'pi pi-plus' },
    canActivate: [AppGuard]
  }
  // { path: '**', component: Page404Component },
];

/**
 * @classdesc - модуль управления маршрутизацией
 */
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [RouterModule]
})
export class RoutingModule {}
