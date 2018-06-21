import { Empresa } from "./empresa.model";

export class Usuario {
  constructor(
    public id?: number,
    public nome?: string,
    public login?: string,
    public senha?: string,
    public tipoUser?: string,
    public empresa?: Empresa
  ) { }
}
