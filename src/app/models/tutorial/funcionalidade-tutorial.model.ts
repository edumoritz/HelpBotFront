import { Tutorial } from "./tutorial.model";
import { Funcionalidade } from "../funcionalidade/funciondalidade.model";

export class FuncionalidadeTutorial {
  constructor(
    public id?: number,
    public tutorial?: Tutorial,
    public funcionalidade?: Funcionalidade
  ) { }
}
