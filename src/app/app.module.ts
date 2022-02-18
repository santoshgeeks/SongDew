import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PromotionToolComponent } from './promotion-tool/promotion-tool.component';
import { FooterComponent } from './footer/footer.component';
import { PromotionHomeComponent } from './promotion-home/promotion-home.component';

@NgModule({
  declarations: [
    AppComponent,
    PromotionComponent,
    PromotionToolComponent,
    FooterComponent,
    PromotionHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
