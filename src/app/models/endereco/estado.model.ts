import { Pais } from "./pais.models";

export class Estado {
    constructor(
        public id?: number,
        public estado?: string,
        public pais?: Pais
    ) { }
}