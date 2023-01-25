
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';

const routes: Routes = [
  {path:'', loadChildren: ()=> import('./core/core.module').then(m=>m.CoreModule)},
  {path:'admin', loadChildren: ()=> import('./admin/admin.module').then(m=>m.AdminModule)},

  {path:'**', component:NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
