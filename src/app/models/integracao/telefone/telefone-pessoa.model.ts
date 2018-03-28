import { Pessoa } from "../../pessoa/pessoa.model";
import { Telefone } from "../../telefone/telefone.model";

export class TelefonePessoa {
    constructor(
        public id?: number,
        public pessoa?: Pessoa,
        public telefone?: Telefone
    ) { }
}
