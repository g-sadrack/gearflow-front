import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ClienteCadastro } from './features/cliente/cliente-cadastro/cliente-cadastro';
import { ClienteListagem } from './features/cliente/cliente-listagem/cliente-listagem';
import { ClienteDetalhado } from './features/cliente/cliente-detalhado/cliente-detalhado';
import { VeiculoListagem } from './features/veiculos/veiculo-listagem/veiculo-listagem';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'cadastro-cliente', component: ClienteCadastro },
  { path: 'listagem-cliente', component: ClienteListagem },
  { path: 'clientes/:id', component: ClienteDetalhado },
  { path: 'listagem-veiculo', component: VeiculoListagem }
];
