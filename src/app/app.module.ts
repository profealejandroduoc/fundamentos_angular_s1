import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { MenuComponent } from './components/menu/menu.component';
import { PosteosComponent } from './pages/posteos/posteos.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    AyudaComponent,
    NotfoundComponent,
    MenuComponent,
    PosteosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
