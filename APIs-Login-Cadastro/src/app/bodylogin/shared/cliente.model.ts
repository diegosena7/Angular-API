import { Cartao } from './cartao.model';
import { Endereco } from './endereco.model';

export interface Cliente {
  idCliente: number;
  nmCliente: string;
  nrCpf: string;
  dsEmail: string;
  dtNasc: string;
  dsGenero: string;
  nrTelefone1: string;
  nrTelefone2: string;
  pwCliente: string;
  enderecos: Array<Endereco>;
  cartoesCreditoDTO: Cartao;
}
