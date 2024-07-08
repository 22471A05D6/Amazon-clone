import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { CartComponent } from './cart/cart.component';
import { CustomerserviceComponent } from './customerservice/customerservice.component';
import { GiftcardsComponent } from './giftcards/giftcards.component';
import { OrdersComponent } from './orders/orders.component';
import { RegistryComponent } from './registry/registry.component';
import { SellComponent } from './sell/sell.component';
import { TodaysdealsComponent } from './todaysdeals/todaysdeals.component';

export const routes: Routes = [
    {
        'path':"cart",
        component:CartComponent
    },
    {
        'path':"customerservice",
        component:CustomerserviceComponent
    },
    {
        'path':"giftcards",
        component:GiftcardsComponent
    },
    {
        'path':"orders",
        component:OrdersComponent
    },
    {
        'path':"registry",
        component:RegistryComponent
    },
    {
        'path':"sell",
        component:SellComponent
    },
    {
        'path':"signin",
        component:SigninComponent
    },
    {
        'path':"todaysdeals",
        component:TodaysdealsComponent
    },
];
