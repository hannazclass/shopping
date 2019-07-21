import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailComponent } from './category/product-detail/product-detail.component';
import { StoryComponent } from './story/story.component';
import { StoreComponent } from './store/store.component';
import { CustomerComponent } from './customer/customer.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CommaPipe } from './comma.pipe';

import { CartService } from './cart.service'

const routes: Routes = [
   {path:'', redirectTo:'main', pathMatch:'full'},
   {path:'main', component:MainComponent},
   {path:'category', component:CategoryComponent},
   {path:'category/:productId', component: ProductDetailComponent },
   {path:'story', component:StoryComponent},
   {path:'store', component:StoreComponent},
   {path:'customer', component:CustomerComponent},
   {path:'cart', component:CartComponent},
   {path:'**', component:NotFoundComponent},
 ];

@NgModule({
   //모듈
   imports: [
      BrowserModule,
      //서비스연결시 필요 
      HttpClientModule,
      //장바구니시 필요
      ReactiveFormsModule,
      RouterModule.forRoot(routes),
   ],
   //컴포넌트, 파이프
   declarations: [
      AppComponent,
      NavComponent,
      MainComponent,
      CategoryComponent,
      ProductDetailComponent,
      StoreComponent,
      StoryComponent,
      CustomerComponent,
      CartComponent,
      NotFoundComponent,
      CommaPipe,
      
   ],
   // 서비스
   providers: [CartService],
   bootstrap: [AppComponent]
})
export class AppModule { }
