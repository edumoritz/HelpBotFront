import { Empresa } from "../usuario/empresa.model";
import { EnumType } from "../enumerate/enum-type.enum";

export class Usuario {
  constructor(
    public id?: number,
    public nome?: string,
    public login?: string,
    public senha?: string,
    public tipoUser?: EnumType,
    public empresa?: Empresa
  ) { }
}
