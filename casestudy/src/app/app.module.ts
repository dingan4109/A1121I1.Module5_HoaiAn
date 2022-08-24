import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FacilityComponent } from './facility/facility.component';
import { EditFacilityComponent } from './edit-facility/edit-facility.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    FacilityComponent,
    EditFacilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
