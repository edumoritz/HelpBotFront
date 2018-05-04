export class Paginacao {
  constructor(
    public totalItens?: number,
    public page?: number,
    public itensPerPage?: number
  ) {
    if (!this.page) {
      this.page = 0;
    }

    if (!this.totalItens) {
      this.totalItens = 0;
    }

    if (!this.itensPerPage) {
      this.itensPerPage = 20;
    }
  }
}
