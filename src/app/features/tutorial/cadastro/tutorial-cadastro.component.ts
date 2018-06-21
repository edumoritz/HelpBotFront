import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ATutorialService } from '../../../services-abstract/tutorial.service';
import { Tutorial } from '../../../models/tutorial/tutorial.model';

@Component({
  selector: 'help-bot-tutorial-cadastro',
  templateUrl: './tutorial-cadastro.component.html'
})
export class TutorialCadastroComponent {

  private tutorial = new Tutorial();

  constructor(
    private activatedRoute: ActivatedRoute,
    private tutorialService: ATutorialService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];

      if (id) {
        this.tutorialService.getOne(id)
          .subscribe((tutorial) => {
            this.tutorial = tutorial;
          }
        );
      }
    });
  }

}
