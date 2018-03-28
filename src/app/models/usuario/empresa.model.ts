export class Empresa {
constructor(
public id?:number,
public  razaoSocial?:String,
public  cnpj?:String,
public  dataAbertura?:Date,
public  dataCadastro?:Date,
public  cep?:String,
// public  pais?: EnumPais
public  cidade?:String,
public  bairro?:String,
public  rua?:String,
public numero?:number,
public  complemento?:String,
public  observacao?:String
// public  areaAtuacaoMercado?: EnumAreaAtuacaoMercado
) { }
}
