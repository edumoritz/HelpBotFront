import { Tutorial } from './tutorial.model';

export class TutorialItemTitulo {
  constructor(
    public id?: number,
    public tutorial?: Tutorial,
    public ordem?: number,
    public titulo?: string,
    public tamanho?: string
  ) { }
}
