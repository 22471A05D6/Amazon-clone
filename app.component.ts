import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink} from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { CartComponent } from './cart/cart.component';
import { CustomerserviceComponent } from './customerservice/customerservice.component';
import { GiftcardsComponent } from './giftcards/giftcards.component';
import { OrdersComponent } from './orders/orders.component';
import { RegistryComponent } from './registry/registry.component';
import { SellComponent } from './sell/sell.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,SigninComponent,RouterLink,CartComponent,CustomerserviceComponent,GiftcardsComponent,OrdersComponent,RegistryComponent,SellComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'amazon';
}
