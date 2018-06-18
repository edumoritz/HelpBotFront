import { Tutorial } from "./tutorial.model";
import { Modulo } from "../funcionalidade/modulo.model";

export class ModuloTutorial {
  constructor(
    public id?: number,
    public tutorial?: Tutorial,
    public modulo?: Modulo
  ) { }
}
