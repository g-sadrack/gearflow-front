// [
//     mecanico: {
//       nome: 'Pedro Alves',
//       especialidade: 'Motor',
//       matricula: 'MEC001',
//     },
//     servicos: [
//       {
//         servico: {
//           codigo: 'SV001',
//           descricao: 'Troca de óleo',
//         },
//         valorServicoPrestado: 120,
//         observacoes: 'Troca realizada com sucesso',
//       },
//     ],
//     produtos: [
//       {
//         produto: {
//           codigo: 'PROD001',
//           nome: 'Filtro de óleo',
//           valor: 25.9,
//         },
//         quantidade: 1,
//         valor: 25.9,
//       },
//     ],
//   },
// ];

import { VeiculoComProprietario } from "./veiculo"

export interface OrdemServico {
  numeroOs: string;
  status: string;
  valorTotal: number;
  dataAbertura: string;
  dataFinalizacao: string;
  veiculo?: VeiculoComProprietario;
}
