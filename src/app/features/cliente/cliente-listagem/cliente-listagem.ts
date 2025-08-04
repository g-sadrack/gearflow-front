import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../core/services/cliente/cliente';
import { RouterModule } from '@angular/router';
import { Searchbar } from "../../../shared/components/searchbar/searchbar";

@Component({
  selector: 'app-cliente-listagem',
  imports: [RouterModule, Searchbar],
  templateUrl: './cliente-listagem.html',
  styleUrl: './cliente-listagem.css',
})
export class ClienteListagem implements OnInit {
  listaClientes: any[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.listarClientes().subscribe((cliente) => {
      this.listaClientes = cliente;
    });
  }
}
