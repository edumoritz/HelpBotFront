import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Opcoes } from './opcoes.model';

@Component({
  selector: 'help-bot-opcoes',
  templateUrl: './opcoes.component.html',
  styleUrls: ['./opcoes.component.scss']
})
export class OpcoesComponent {

  @Input() public opcoes = [] as Opcoes[];

  public tamanhoIcone = 19;

  constructor() { }

}

