import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../../core/services/cliente/cliente';
import { Veiculo } from '../../../models/veiculo';
import { ToastService } from '../../../shared/services/toast/toast-services';

@Component({
  selector: 'app-veiculo-cadastro',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './veiculo-cadastro.html',
  styleUrl: './veiculo-cadastro.css'
})
export class VeiculoCadastro {
  veiculoForm: FormGroup;
  proprietario: any;
  veiculo!: Veiculo;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastService,
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

  associarVeiculo() {
    if (this.veiculoForm.valid) {
      const veiculo: Veiculo = this.veiculoForm.value;
      this.clienteService.associarVeiculo(this.proprietario.id, veiculo).subscribe({
        next: (res) => {
          console.log("MEU DEU CARA")
          console.log(veiculo)
          this.clienteService.associarVeiculo(this.proprietario.id, veiculo)
          this.veiculoForm.reset();
          this.router.navigate([`/cadastro-cliente/${this.proprietario.id}`]);
        },
        error: (err) => {
          this.showToast('Erro ao cadastrar veiculo!');
        },
      });
    } else {
      console.log("MEU DEU CARA")
      this.toatsErros();
    }
  }

  toatsErros() {
    const fieldLabels: Record<string, string> = {
      placa: 'Placa',
      marca: 'Marca',
      modelo: 'Modelo',
      ano: 'Ano',
      cor: 'Cor',
      quilometragem: 'Quilometragem'
    };

    Object.entries(this.veiculoForm.controls).forEach(([campo, control]) => {
      if (control.invalid && control.touched) {
        const errors = control.errors;

        if (errors) {
          if (errors['required']) {
            this.showToast(`${fieldLabels[campo]} é obrigatório`);
          }
        }
      }
    }
    )
  }

  showToast(message: string) {
    this.toast.show(message);
  }

}
