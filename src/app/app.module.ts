/** ==== Загружаем модули они должны быть подключены в разделе imports директивы NgModule */
import { NgModule }            from '@angular/core';
import { TableModule }         from 'primeng/table';
import { ToastModule }         from 'primeng/toast';
import { DialogModule }        from 'primeng/dialog';
import { ButtonModule }        from 'primeng/button';
import { ToolbarModule }       from 'primeng/toolbar';
import { DropdownModule }      from 'primeng/dropdown';
import { InputTextModule }     from 'primeng/inputtext';
import { PanelMenuModule }     from 'primeng/panelmenu';
import { BreadcrumbModule }    from 'primeng/breadcrumb';
import { FileUploadModule }    from 'primeng/fileupload';
import { InputSwitchModule }   from 'primeng/inputswitch';
import { ScrollPanelModule }   from 'primeng/scrollpanel';
import { HttpClientModule }    from '@angular/common/http';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RoutingModule }       from './router/routing.module';
import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** ==== Загружаем компоненты они должны быть подключены в разделе declarations директивы NgModule */
import { MessageService }    from 'primeng/api';
import { AppComponent }      from './app.component';
import { MessageModule }     from 'primeng/message';
import { MessagesModule }    from 'primeng/primeng';
import { HomeComponent }     from './home/home.component';
import { LoginComponent }    from './auth/login/login.component';
import { TopMenuComponent }  from './top-menu/top-menu.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent }   from './auth/logout/logout.component';
import { HeaderComponent }   from './admin/header/header.component';
import { SliderComponent }   from './admin/slider/slider.component';
import { LeftMenuComponent }       from './left-menu/left-menu.component';
import { BreadcrumbComponent }     from './breadcrumb/breadcrumb.component';
import { TableEntityComponent }    from './table-entity/table-entity.component';
import { DialogEntityComponent }   from './dialog-entity/dialog-entity.component';
import { ValidatorToastComponent } from './validator-toast/validator-toast.component';
import { UsersListComponent }      from './admin/user/users-list/users-list.component';
import { OrdersListComponent }     from './admin/orders/orders-list/orders-list.component';
import { ValidatorMessageComponent } from './validator-message/validator-message.component';
import { ValidatorNetworkComponent } from './validator-network/validator-network.component';
import { ProductsListComponent }   from './admin/products/products-list/products-list.component';
import { PartnersListComponent }   from './admin/partners/partners-list/partners-list.component';
import { CategoryListComponent }   from './admin/categories/category-list/category-list.component';
import { ProductsCreateComponent } from './admin/products/products-create/products-create.component';
import { PartnersCreateComponent } from './admin/partners/partners-create/partners-create.component';
import { CategoryCreateComponent } from './admin/categories/category-create/category-create.component';

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
    RoutingModule,
    DropdownModule,
    MessagesModule,
    PanelMenuModule,
    InputTextModule,
    FileUploadModule,
    BreadcrumbModule,
    ScrollPanelModule,
    InputSwitchModule,
    InputTextareaModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
