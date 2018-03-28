import { Campo } from './campo.model';

export class Funcionalidade {
    constructor(
        public id?: number,
        public nome?: string,
        public especificacao?: string,
        public campos?: Campo[]
    ) {
        if (!this.campos) {
            this.campos = [];
        }
    }
}
