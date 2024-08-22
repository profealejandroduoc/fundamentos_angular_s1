import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  mis_rutas=[
    {
      nombre:'Home',
      destino:'/home'
    },
    {
      nombre:'Contacto',
      destino:'/contacto'
    },
    {
      nombre:'Posts',
      destino:'/posts'
    },
    {
      nombre:'Help',
      destino:'/ayuda'
    },
  ]


}
