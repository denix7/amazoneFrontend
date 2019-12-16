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
        component: ShopComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'identify',
        component: IdentifyComponent,
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