import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotionHomeComponent } from './promotion-home/promotion-home.component';
import { PromotionComponent } from './promotion/promotion.component';

const routes: Routes = [
  { path: '', redirectTo: '/promotion-home', pathMatch: 'full' },
  {path:"promotion-home", component: PromotionHomeComponent},
  {path:"promotion", component: PromotionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
