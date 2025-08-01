import { Proprietario } from "./cliente";

export interface Veiculo {
  id?: number;
  placa: string;
  marca: string;
  modelo: string;
  ano: number;
  cor: string;
  quilometragem: number;
}

export interface VeiculoComProprietario {
  id?: number;
  placa: string;
  marca: string;
  modelo: string;
  ano: number;
  cor: string;
  quilometragem: number;
  proprietario: Proprietario;
}
