import { Component } from '@angular/core';
import { ClienteService } from '../../../core/services/cliente/cliente';
import { ActivatedRoute } from '@angular/router';
import { OrdemServico } from '../../../models/ordemServico'


@Component({
  selector: 'app-cliente-detalhado',
  imports: [],
  templateUrl: './cliente-detalhado.html',
  styleUrl: './cliente-detalhado.css',
})
export class ClienteDetalhado {

  ordemServico: OrdemServico[] = [];
  proprietario: any;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute
  ) {
    console.log(this.ordemServico);
  }


  ngOnInit(){
  const id = this.route.snapshot.paramMap.get('id');
  this.clienteService.buscarCLienteId(Number(id)).subscribe((cliente) => {
    this.proprietario = cliente;
  });

  this.clienteService
    .buscarClienteElistarUltimasOrdensServico(Number(id))
    .subscribe((ordemServicos) => {
      this.ordemServico = ordemServicos;
    });
  }
}
