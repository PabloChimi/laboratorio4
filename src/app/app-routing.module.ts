import { ListadoDeUsuariosComponent } from './componentes/listado-de-usuarios/listado-de-usuarios.component';
import { LoginComponent } from './componentes/login/login.component';
import { BienvenidosComponent } from './componentes/bienvenidos/bienvenidos.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'inicio', component: BienvenidosComponent},
 {path: 'login', component: LoginComponent},
 {path: 'usuario', component: UsuarioComponent},
 {path: 'listaDeUsuarios', component: ListadoDeUsuariosComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//ng generate module app-routing --flat --module-app
