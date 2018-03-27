import { Estado } from "./estado.models";

export class Cidade {
    constructor(
        public id?: number,
        public cidade?: string,
        public estado?: Estado
    ) { }
}