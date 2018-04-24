import { Observable } from 'rxjs/Rx';

export interface IConfiguracaoModal<MODELO, RESPOSTA> {
  fechando?: Observable<RESPOSTA>;
  modelo?: MODELO;
}
