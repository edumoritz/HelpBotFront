export class TipoRegraCampo {
    constructor(
        public id?: number,
        public requerido?: boolean,
        public regex?: string,
        public maximo ?: number,
        public minimo ?: number,
        public escalonamento ?: number
    ) { }
}