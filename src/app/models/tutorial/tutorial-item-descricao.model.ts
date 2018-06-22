import { Tutorial } from './tutorial.model';

export class TutorialItemDescricao {
  constructor(
    public id?: number,
    public descricao?: string,
    public tutorial?: Tutorial,
    public ordem?: number
  ) { }
}
