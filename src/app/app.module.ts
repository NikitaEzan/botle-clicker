import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClickOutsideModule } from 'ng4-click-outside';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GorizontalMenuComponent } from './gorizontal-menu/gorizontal-menu.component';
import { HeaderSearchComponent } from './header-search/header-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GorizontalMenuComponent,
    HeaderSearchComponent
  ],
  imports: [
    BrowserModule,
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
