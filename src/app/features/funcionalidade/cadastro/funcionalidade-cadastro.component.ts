import { Component } from '@angular/core';
import { Funcionalidade } from '../../../models/funcionalidade/funciondalidade.model';
import { AFuncionalidadeService } from '../../../services-abstract/funcionalidade.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'help-bot-funcionalidade-cadastro',
  templateUrl: './funcionalidade-cadastro.component.html'
})
export class FuncionalidadeCadastroComponent {

  public funcionalidade = new Funcionalidade();

  constructor(
    private funcionalidadeService: AFuncionalidadeService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((param) => {
      const id = param['id'];

      if (id !== 'null') {
        this.funcionalidadeService.getOne(Number(id)).subscribe((funcionalidade) => {
          this.funcionalidade.id = funcionalidade.id;
          this.funcionalidade.especificacao = funcionalidade.especificacao;
          this.funcionalidade.nome = funcionalidade.nome;
        });
      }
    });
   }

   public salvar(): void {
     if (this.funcionalidade.id) {
       this.funcionalidadeService.put(this.funcionalidade).subscribe((funcionalidade) => {
         window.history.back();
       });
     } else {
       this.funcionalidadeService.post(this.funcionalidade).subscribe((funcionalidade) => {
         window.history.back();
       });
     }
   }

   public cancelar(): void {
     window.history.back();
   }
}
