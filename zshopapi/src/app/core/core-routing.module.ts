import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutComponent } from './pages/about/about.component';
import { ShopComponent } from './pages/shop/shop.component';
import { PrivacytermsComponent } from './pages/privacyterms/privacyterms.component';
import { ShopdetailComponent } from './pages/shopdetail/shopdetail.component';
import { HomeComponent } from './pages/home/home.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainlayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contactus', component: ContactusComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'privacy', component: PrivacytermsComponent },
      { path: 'home', component: HomeComponent },
      { path: 'product/:id', component: ShopdetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
