import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../../../core/services/cliente/cliente';

@Component({
  selector: 'app-veiculo-cadastro',
  imports: [],
  templateUrl: './veiculo-cadastro.html',
  styleUrl: './veiculo-cadastro.css'
})
export class VeiculoCadastro {
  veiculoForm: FormGroup;
  proprietario: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) {
    this.veiculoForm = fb.group({
      placa: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      ano: ['', [Validators.required]],
      cor: [''],
      quilometragem: ['']
    })

    const clienteId = this.route.snapshot.paramMap.get('id');
    this.clienteService.buscarCLienteId(Number(clienteId)).subscribe((cliente) => {
      this.proprietario = cliente
    });



  }
}
