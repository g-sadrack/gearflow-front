import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ClienteCadastro } from './features/cliente/cliente-cadastro/cliente-cadastro';
import { ClienteListagem } from './features/cliente/cliente-listagem/cliente-listagem';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'cadastro-cliente', component: ClienteCadastro },
  { path: 'listagem-cliente', component: ClienteListagem },
];
