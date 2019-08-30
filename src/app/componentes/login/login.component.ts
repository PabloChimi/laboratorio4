import { Usuario } from './../../clases/usuario';
import { Component, OnInit } from '@angular/core';
import { FormattedMessageChain } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;
  public ingresado : boolean;

  constructor() {
    this.usuario = new Usuario();
    this.usuario.nombre = 'Pepe';
    this.usuario.clave = 'secreto';

    this.ingresado = false;
  }

  ngOnInit() {
  }

  Ingresar(){
    console.info('usuario', this.usuario);
  }

}
