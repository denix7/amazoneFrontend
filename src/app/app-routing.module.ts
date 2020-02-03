import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'

import { NavbarComponent } from './components/navbar/navbar.component';
import { ShopComponent } from './components/shop/shop.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { IdentifyComponent } from './components/identify/identify.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfilesettingsComponent } from './components/profilesettings/profilesettings.component';
import { ProfileaddressComponent } from './components/profileaddress/profileaddress.component';
import { ProfileaddresseditComponent } from './components/profileaddressedit/profileaddressedit.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { ProductSaleComponent } from './components/product-sale/product-sale.component';
import { ProductsMeComponent } from './components/products-me/products-me.component';
import { ProductsByCategoryComponent } from './components/shop/products-by-category/products-by-category.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'shop',
        component: ShopComponent,
        children: [
        ]
    },
    {
        path: 'shop/category/:id',
        component: ProductsByCategoryComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: 'products/sale-product',
                component: ProductSaleComponent
            },
            {
                path: 'products/my-products',
                component: ProductsMeComponent
            }
        ]
    },
    {
        path: 'categories',
        component: CategoryComponent,
        children: [
            {
                path:"",
                component: CategoryComponent
            },
            // {
            //     path: ':categoryId',
            //     component: CategoryEditComponent,
                
            // },
        ]
    },
    
    {
        path: 'categories/:categoryId',
        component: CategoryEditComponent,
        
    },
    
    {
        path: 'profile/settings',
        component: ProfilesettingsComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'profile/address',
        component: ProfileaddressComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'profile/address/edit',
        component: ProfileaddresseditComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'identify',
        component: IdentifyComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: 'register',
                component: RegistrationComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: '',
                component: LoginComponent
            },
            {
                path: '**',
                pathMatch: 'full',
                redirectTo: 'login'
            },
        ]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}