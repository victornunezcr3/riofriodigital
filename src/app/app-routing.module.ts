import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'item/:id', component:ItemComponent},
  {path:'contact', component:ContactComponent},
  {path:'search/:termino', component:SearchComponent},
  {path:'**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
