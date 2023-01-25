import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AboutComponent } from './pages/about/about.component';
import { ShopdetailComponent } from './pages/shopdetail/shopdetail.component';
import { PrivacytermsComponent } from './pages/privacyterms/privacyterms.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ContactusComponent } from './pages/contactus/contactus.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainlayoutComponent,
    HomeComponent,
    ShopComponent,
    AboutComponent,
    ShopdetailComponent,
    PrivacytermsComponent,
    NotfoundComponent,
    ContactusComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
