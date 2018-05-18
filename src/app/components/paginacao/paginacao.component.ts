import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

export interface Page {
  description: string;
  selectable: boolean;
  value?: number;
}

@Component({
  selector: 'help-bot-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.scss']
})
export class PaginacaoComponent {

  @Input()
  public set totalItens(totalItensValue: number) {
    this.totalItensValue = totalItensValue;
    this.generatePages();
  }

  @Input()
  public set itensPerPage(itensPerPageValue: number) {
    this.itensPerPageValue = itensPerPageValue;
    this.generatePages();
  }

  @Input()
  public set page(pageValue: number) {
    this.pageValue = pageValue;
    this.pageChange.next(this.pageValue);
    this.generatePages();
  }

  @Output() public pageChange = new EventEmitter<number>();

  public pageValue = 0;

  public totalItensValue = 0;

  public itensPerPageValue = 2;

  public totalItensShow = 5;

  public pages = [] as Page[];

  private generatePages(): void {
    let totalOfPages: number;
    if (this.totalItensValue < this.itensPerPageValue) {
      totalOfPages = 1;
    } else {
      totalOfPages = this.totalItensValue / this.itensPerPageValue;
    }

    const pages = [] as Page[];

    const firstPage = { description: 1 + '', selectable: true, value: 1 };
    const lastPage = { description: Number(totalOfPages.toFixed(0)) + '', selectable: true, value: Number(totalOfPages.toFixed(0)) };
    const ellipsisPage = { description: '...', selectable: false };

    // let max = this.page

    // if (this.pageValue === 1) {
    //   pages.push(firstPage);
    //   pages.push();
    // } else if ()

    if (totalOfPages >= 1) {
      const lastValue = Number(totalOfPages.toFixed(0));

      if ((this.pageValue - 2) <= 0) {

        for (let i = 2; i < 5; i++) {
          const value = Number(i.toFixed(0));
          pages.push({ description: value + '', selectable: true, value: value });
        }

        pages.push();
        pages.push();

      } else if ((this.pageValue + 3) >= totalOfPages) {

        pages.push({ description: 1 + '', selectable: true, value: 1 });
        pages.push({ description: '...', selectable: false });

        for (let i = totalOfPages - 3; i < totalOfPages; i++) {
          const value = Number(i.toFixed(0));
          pages.push({ description: value + '', selectable: true, value: value });
        }

        pages.push({ description: lastValue + '', selectable: true, value: lastValue });

      } else {

        pages.push({ description: 1 + '', selectable: true, value: 1 });
        pages.push({ description: '...', selectable: false });

        for (let i = this.pageValue; i < this.pageValue + 3; i++) {
          const value = Number(i.toFixed(0));
          pages.push({ description: value + '', selectable: true, value: value });
        }

        pages.push({ description: '...', selectable: false });
        pages.push({ description: lastValue + '', selectable: true, value: lastValue });
      }
    }

    this.pages = pages;
  }

  public changePage(page: Page): void {
    if (page.value) {
      this.pageValue = page.value - 1;
      this.pageChange.emit(this.pageValue);
      this.generatePages();
    }
  }

}
