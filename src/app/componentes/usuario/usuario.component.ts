import { Usuario } from '../../clases/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;
  listado: Array<Usuario> = [];
  //listado: Usuario[];
  constructor() {

    this.usuario = new Usuario();
  }

  ngOnInit() {
  }

  Pushear() {
    this.listado.push(this.usuario);
  }

}
