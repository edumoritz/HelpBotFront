import { Pais } from "./pais.model";

export class Estado {
    constructor(
        public id?: number,
        public estado?: string,
        public pais?: Pais
    ) { }
}