import { Cidade } from "./cidade.model";

export class Bairro {
    constructor(
        public id?: number,
        public bairro?: string,
        public cidade?: Cidade
    ) { }
}