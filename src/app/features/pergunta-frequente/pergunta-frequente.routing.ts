import { Routes } from '@angular/router';
import { PerguntaFrequenteVisualizacaoComponent } from './visualizacao/pergunta-frequente-visualizacao.component';

import { PerguntaFrequenteCadastroComponent } from './cadastro/pergunta-frequente-cadastro.component';


export const regraCampoRoute: Routes = [
  { path: 'pergunta-frequente-visualizacao', component: PerguntaFrequenteVisualizacaoComponent }
];
