import { PerguntaFrequenteKeyword } from "./pergunta-frequente-keyword.model";
import { Tutorial } from "../tutorial/tutorial.model";

export class PerguntaFrequente {
    constructor(
      public id?: number,
      public pergunta?: string,
      public resposta?: Tutorial,
      public keyword?: PerguntaFrequenteKeyword[]
    ) { }
  }
  