import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PowerPipe } from './power.pipe';
import { ActivateRouteCompComponent } from './activate-route-comp/activate-route-comp.component';
import { ProductDetailCompComponent } from './product-detail-comp/product-detail-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerPipe,
    ActivateRouteCompComponent,
    ProductDetailCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
