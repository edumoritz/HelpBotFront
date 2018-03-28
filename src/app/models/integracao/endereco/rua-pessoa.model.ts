import { Pessoa } from "../../pessoa/pessoa.model";

export class RuaPessoa {
    constructor(
        public id?: number,
        public pessoa?: Pessoa,
        public numero?: string,
        public complemento?: string
    ) { }
}
