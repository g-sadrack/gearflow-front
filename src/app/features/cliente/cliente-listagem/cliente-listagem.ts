import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../core/services/cliente/cliente';
import { RouterModule } from '@angular/router';
import { SearchService } from '../../../shared/services/search/search-service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-cliente-listagem',
  imports: [RouterModule],
  templateUrl: './cliente-listagem.html',
  styleUrl: './cliente-listagem.css',
})
export class ClienteListagem implements OnInit {
  listaClientes: any[] = [];
  listaFiltrada: any[] = [];

  constructor(
    private clienteService: ClienteService,
    private search: SearchService
  ) { }

  ngOnInit(): void {
    this.clienteService.listarClientes().subscribe((cliente) => {
      this.listaClientes = cliente;
      this.listaFiltrada = this.listaClientes;
    });

    this.search.term$
      .pipe(debounceTime(200))
      .subscribe(term => this.filter(term));
  }

  ngOnDestroy(): void {
    this.search.setTerm('');
  }

  filter(term: string): void {
    const t = term.trim().toLowerCase();

    if (!t) {
      this.listaFiltrada = this.listaClientes;
      return;
    }
    this.listaFiltrada = this.listaClientes.filter(cliente =>
      cliente.nome.toLowerCase().includes(t) ||
      cliente.cpf.includes(t) ||
      cliente.telefone.includes(t)
    );
  }

}
