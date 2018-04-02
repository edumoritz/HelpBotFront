export class Pageable<T> {
  constructor(
    public qtdItens?: number,
    public itens?: T[]
  ) { }
}
