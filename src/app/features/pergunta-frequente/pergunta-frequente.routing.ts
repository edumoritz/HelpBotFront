import { Routes } from '@angular/router';



export const regraCampoRoute: Routes = [
  { path: 'pergunta-frequente-visualizacao', component: PerguntaFrequenteVisualizacaoComponent },
  { path: 'pergunta-frequente-cadastro/:id', component: PerguntaFrequenteCadastroComponent }
];
