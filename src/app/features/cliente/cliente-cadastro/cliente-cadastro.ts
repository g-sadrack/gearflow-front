import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "../../../shared/components/input.component/input.component";


@Component({
  selector: 'app-cliente-cadastro',
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './cliente-cadastro.html',
  styleUrl: './cliente-cadastro.css',
})
export class ClienteCadastro {
  clienteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.clienteForm = fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      cep: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      complemento: [''],
      estado: ['', Validators.required],
    });
  }
  cadastrarCliente() {
    if (this.clienteForm.valid) {
      console.log('Cliente cadastrado:', this.clienteForm.value);
      // Aqui você chamará seu service para enviar ao backend
    } else {
      console.log('Formulário inválido:', this.clienteForm.value.nome);
      this.markFormGroupTouched();
    }
  }
  private markFormGroupTouched() {
    Object.keys(this.clienteForm.controls).forEach((key) => {
      const control = this.clienteForm.get(key);
      if (control) {
        control.markAsTouched();
      }
    });
  }

  getFieldError(fieldName: string): string | null {
    const field = this.clienteForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) return `${fieldName} é obrigatório`;
      if (field.errors['email']) return 'Email inválido';
      if (field.errors['minlength'])
        return `Mínimo ${field.errors['minlength'].requiredLength} caracteres`;
      if (field.errors['pattern']) return `Formato inválido para ${fieldName}`;
    }
    return null;
  }
}
