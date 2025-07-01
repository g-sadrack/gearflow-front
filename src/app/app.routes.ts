import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ClienteCadastro } from './features/cliente/cliente-cadastro/cliente-cadastro';
import { ClienteBusca } from './features/cliente/cliente-busca/cliente-busca';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'cadastro-cliente', component: ClienteCadastro },
  { path: 'busca-cliente', component: ClienteBusca },
];
