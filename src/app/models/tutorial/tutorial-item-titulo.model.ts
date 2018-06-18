import { Tutorial } from "./tutorial.model";
import { EnumType } from "../enumerate/enum-type.enum";

export class TutorialItemTitulo {
  constructor(
    public id?: number,
    public tutorial?: Tutorial,
    public ordem?: number,
    public titulo?: String,
    public tamanho?: String
  ) { }
}
