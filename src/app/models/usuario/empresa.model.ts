export class Empresa {
  constructor(
    public id?: number,
    public razaoSocial?: string,
    public cnpj?: string,
    public dataAbertura?: Date,
    public dataCadastro?: Date,
    public cep?: string,
    public pais?: string,
    public cidade?: string,
    public bairro?: string,
    public rua?: string,
    public numero?: number,
    public complemento?: string,
    public observacao?: string,
    public areaAtuacaoMercado?: string
  ) { }
}
