export interface Cliente {
  id?: number;
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  cep: string;
  numero: string;
  bairro: string;
  cidade: string;
  complemento?: string;
  estado: string;
}
