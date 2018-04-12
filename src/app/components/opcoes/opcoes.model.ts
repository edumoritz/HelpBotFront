import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface Opcoes {
  icone: IconDefinition;
  acao: () => any;
  cor: 'danger' | 'success' | 'primary' | 'info' | 'warnig';
  titulo: string;
}
