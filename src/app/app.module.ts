import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListComponent } from './components/list-component/list.component';
import { ListItemComponent } from './components/list-item-component/list-item.component';
import { UserComponent } from './components/user-component/user.component';

import { UtilityService } from './services/utility.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UtilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
