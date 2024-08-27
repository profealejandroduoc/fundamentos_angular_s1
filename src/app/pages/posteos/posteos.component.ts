import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-posteos',
  templateUrl: './posteos.component.html',
  styleUrl: './posteos.component.css'
})
export class PosteosComponent implements OnInit {
  
  constructor(private srv:ServicioService){

  }

  posteos:any;

  ngOnInit() {
    console.log("Inicio de la página");

    this.srv.getDatos().subscribe(datos=>{
      this.posteos=datos;
      console.log(this.posteos);
    })
  }


}
