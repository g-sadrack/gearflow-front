/* eslint-disable @angular-eslint/prefer-inject */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../../../models/cliente';
import { OrdemServico } from '../ordemServico/ordemServico';
import { Veiculo } from '../../../models/veiculo';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {

  private apiUrl = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) { }

  cadastrarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }

  listarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  buscarCLienteId(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrl}/${id}`);
  }

  buscarClienteElistarUltimasOrdensServico(id: number): Observable<OrdemServico[]> {
    return this.http.get<OrdemServico[]>(`${this.apiUrl}/${id}/ordens-servico`);
  }

  associarVeiculo(id: any, veiculo: Veiculo): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiUrl}/${id}/associar-veiculo`, veiculo);
  }

}
export type { Cliente };

