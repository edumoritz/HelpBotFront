import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'help-bot-page',
  templateUrl: './page.component.html'
})
export class PageComponent {

  @Input() public titulo: string;

}
