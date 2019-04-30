/** ==== Загружаем модули они должны быть подключены в разделе imports директивы NgModule */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TabMenuModule } from 'primeng/tabmenu';
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

const appRoutes: Routes = [
  { path: 'menu',     component: MenuListComponent },
  { path: 'header',   component: HeaderComponent },
  { path: 'slider',   component: SliderComponent },
  { path: 'orders',   component: OrdersComponent },
  { path: 'category/list',  component: CategoryListComponent },
  { path: 'category/create',  component: CategoryCreateComponent },
  { path: 'partners', component: PartnersComponent }
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
    MenuListComponent
  ],
  imports: [
    FormsModule,
    TableModule,
    BrowserModule,
    TabMenuModule,
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
