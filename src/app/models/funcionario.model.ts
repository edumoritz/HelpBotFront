export class Funcionario {
    constructor(
      public id?: number,
      public login?: string,
      public senha?: string,
      public nome?: string,
      public cpf?: string,
      public email?: string,
      public pemissao?: string
    ) { }
  }