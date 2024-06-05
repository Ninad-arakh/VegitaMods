import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BdgComponent } from './BDG/bdg/bdg.component';
import { TirangaComponent } from './BDG/tiranga/tiranga.component';

const routes: Routes = [
 
  { path: '', component: AppComponent },
  {
    path:"bdgGame", component:BdgComponent
  },
  {
    path:"Tiranga", component:TirangaComponent
  },
  {
    path:"**", component:AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
