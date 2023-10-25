import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule,provideToastr } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { cartFill} from 'ngx-bootstrap-icons';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducer';

// Select some icons (use an object, not an array)
const icons = {
  cartFill
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick(icons),
    AppRoutingModule,
    StoreModule.forRoot({
      products: reducers
    }),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [ provideToastr({
    timeOut: 2000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
  }), ],
  bootstrap: [AppComponent]
})
export class AppModule { }
