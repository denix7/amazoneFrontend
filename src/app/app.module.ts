import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ShopComponent } from './components/shop/shop.component';
import { ContactComponent } from './components/contact/contact.component';

import { RestApiService } from './services/rest-api.service';
import { DataService } from './services/data.service';
import { MessageComponent } from './components/message/message.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { IdentifyComponent } from './components/identify/identify.component';
import { LoginRegisterNavComponent } from './components/identify/login-register-nav/login-register-nav.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfilesettingsComponent } from './components/profilesettings/profilesettings.component';
import { ProfileaddressComponent } from './components/profileaddress/profileaddress.component';
import { ProfileaddresseditComponent } from './components/profileaddressedit/profileaddressedit.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { ProductSaleComponent } from './components/product-sale/product-sale.component';
import { ProductsMeComponent } from './components/products-me/products-me.component';

import { AngularFileUploaderModule } from "angular-file-uploader";
import { ProductsByCategoryComponent } from './components/shop/products-by-category/products-by-category.component';
import { CategoryListComponent } from './components/shop/category-list/category-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ShopComponent,
    NavbarComponent,
    ContactComponent,
    MessageComponent,
    RegistrationComponent,
    LoginComponent,
    IdentifyComponent,
    LoginRegisterNavComponent,
    ProfileComponent,
    ProfilesettingsComponent,
    ProfileaddressComponent,
    ProfileaddresseditComponent,
    CategoryComponent,
    CategoryEditComponent,
    ProductSaleComponent,
    ProductsMeComponent,
    ProductsByCategoryComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFileUploaderModule
  ],
  providers: [
    RestApiService,
    DataService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
