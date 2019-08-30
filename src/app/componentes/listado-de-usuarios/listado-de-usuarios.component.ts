import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-listado-de-usuarios',
  templateUrl: './listado-de-usuarios.component.html',
  styleUrls: ['./listado-de-usuarios.component.css']
})
export class ListadoDeUsuariosComponent implements OnInit {

  public listado:Usuario[] = [
    { nombre: 'juan', clave: 'Dr Nice' },
    { nombre: 'robert', clave: 'Dr Nice' }];

  constructor() {
    // var usuario1:Usuario = new Usuario();
    // var usuario2:Usuario = new Usuario();
    // var usuario3:Usuario = new Usuario();

    //this.listado = {usuario1, usuario2, usuario3};

  }

  ngOnInit() {
  }

}
