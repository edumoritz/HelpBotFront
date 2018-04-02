import { Empresa } from './empresa.model';

export class Usuario {
  constructor(
    public id?: number,
    public nome?: string,
    public password?: string,
    public empresaId?: Empresa,
    public tipoUsuario?: string,
    public codigoUsuario?: number
  ) { }
}
