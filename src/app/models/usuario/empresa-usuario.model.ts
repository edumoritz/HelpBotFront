import { Empresa } from './empresa.model';

export class EmpresaUsuario {
  constructor(
    public id?: number,
    public empresa?: Empresa,
    public usuario?: EmpresaUsuario
  ) { }
}
