import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BackData } from './BackData';

import { FormsModule } from '@angular/forms';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { ProductCardComponent } from './product-card/product-card.component';
// import { SharedModule } from './Shared/shared.module';
import { StarsComponent } from './Shared/stars.component';


@NgModule({
  declarations: [
    AppComponent,
    ShopPageComponent,
    ProductCardComponent,
    StarsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // SharedModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(BackData),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
