import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-cliente-cadastro',
  imports: [ReactiveFormsModule],
  templateUrl: './cliente-cadastro.html',
  styleUrl: './cliente-cadastro.css',
})
export class ClienteCadastro {
  clienteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.clienteForm = fb.group({
      nome:[''],
      email: [''],
      telefone: [''],
      cpf: [''],
      cep: [''],
      numero: [''],
      bairro: [''],
      cidade: [''],
      complemento: [''],
      estado: [''],
    })
  }

  cadastrarCliente() {
    console.log('Cliente cadastrado:', this.clienteForm.value);
    // Aqui você chamará seu service para enviar ao backend futuramente
  }
}
