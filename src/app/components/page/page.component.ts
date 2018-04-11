import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'help-bot-page',
  templateUrl: './page.component.html'
})
export class PageComponent {

  @Input()
  public set titulo(titulo: string) {
    if (titulo) {
      this.tituloValue = titulo;
      this.html = this.getTitulo();
    }
  }

  @Input() 
  public set tituloTag(tituloTag: string) {
    if (tituloTag) {
      this.tituloTagValue = tituloTag;
      this.html = this.getTitulo();
    }
  }

  public html: SafeHtml;

  private tituloValue: string;
  private tituloTagValue = 'h3';

  constructor(
    private domSanitizer: DomSanitizer
  ) {

  }

  public getTitulo(): SafeHtml {
    let html = '';

    html += '<' + (this.tituloTagValue || 'h3') + '>';
    html += this.tituloValue;    
    html += '</' + (this.tituloTagValue || 'h3') + '>';
    

    return this.domSanitizer.bypassSecurityTrustHtml(html);

  }

}
