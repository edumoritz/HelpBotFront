import { Estado } from "./estado.model";


export class Cidade {
    constructor(
        public id?: number,
        public cidade?: string,
        public estado?: Estado
    ) { }
}