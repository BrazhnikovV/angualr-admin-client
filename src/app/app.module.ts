import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { LeftMenuComponent } from './left-menu/left-menu.component';

const appRoutes: Routes = [
  {path: 'UI/part1/Details', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    LeftMenuComponent
  ],
  imports: [
    BrowserModule,
    TabMenuModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
