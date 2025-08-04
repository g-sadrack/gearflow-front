import { Veiculo } from "./veiculo";

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
  veiculos?: Veiculo[];
}

export interface Proprietario {
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  cep: string;
  veiculos?: Veiculo[];
}
