import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Cliente } from '../../../models/cliente';
import { ClienteService } from '../../../core/services/cliente/cliente';
import { ToastService } from '../../../shared/services/toast/toast-services';

@Component({
  selector: 'app-cliente-cadastro',
  imports: [ReactiveFormsModule],
  templateUrl: './cliente-cadastro.html',
  styleUrl: './cliente-cadastro.css',
})
export class ClienteCadastro {
  clienteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private toast: ToastService
  ) {
    this.clienteForm = fb.group({
      nome: ['joa', [Validators.required, Validators.minLength(3)]],
      email: ['joao@email.com', [Validators.required, Validators.email]],
      telefone: ['61996812321', Validators.required],
      cpf: [
        '07506947189',
        [Validators.required, Validators.pattern(/^\d{11}$/)],
      ],
      cep: ['72863230', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      numero: ['03', Validators.required],
      bairro: ['novo gama', Validators.required],
      cidade: ['novo gama', Validators.required],
      complemento: ['goias'],
      estado: ['go', Validators.required],
    });
  }

  cadastrarCliente() {
    if (this.clienteForm.valid) {
      const cliente: Cliente = this.clienteForm.value;
      this.clienteService.cadastrarCliente(cliente).subscribe({
        next: (res) => {
          this.showToast(`Cliente cadastrado com sucesso!`);
          this.clienteForm.reset();
        },
        error: (err) => {
          this.showToast(`Erro ao cadastrar cliente!`);
        },
      });
    } else {
      this.toastErrors();
    }
  }

  toastErrors() {
    const fieldLabels: Record<string, string> = {
      nome: 'Nome',
      email: 'Email',
      telefone: 'Telefone',
      cpf: 'CPF',
      cep: 'CEP',
      numero: 'Número',
      bairro: 'Bairro',
      cidade: 'Cidade',
      complemento: 'Complemento',
      estado: 'Estado',
    };

    Object.entries(this.clienteForm.controls).forEach(([campo, control]) => {
      if (control.invalid && control.touched) {
        const errors = control.errors;

        if (errors) {
          if (errors['required']) {
            this.showToast(`${fieldLabels[campo]} é obrigatório.`);
          }

          if (errors['minlength']) {
            this.showToast(
              `${fieldLabels[campo]} deve ter no mínimo ${errors['minlength'].requiredLength} caracteres.`
            );
          }

          if (errors['pattern']) {
            this.showToast(
              `${fieldLabels[campo]} está em um formato inválido.`
            );
          }

          if (errors['email']) {
            this.showToast(`${fieldLabels[campo]} deve ser um email válido.`);
          }
        }
      }
    });
  }

  showToast(message: string) {
    this.toast.show(message);
  }
}
