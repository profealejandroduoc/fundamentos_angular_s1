import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { PosteosComponent } from './pages/posteos/posteos.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'ayuda',
    component:AyudaComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  },
  {
    path:'posts',
    component:PosteosComponent
  },
  {
    path:'**',
    component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
