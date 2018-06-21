import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ATutorialService } from '../../../services-abstract/tutorial.service';
import { Tutorial } from '../../../models/tutorial/tutorial.model';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'help-bot-tutorial-cadastro',
  templateUrl: './tutorial-cadastro.component.html'
})
export class TutorialCadastroComponent {

  public tutorial = new Tutorial();

  public tutorialNome: FormControl;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tutorialService: ATutorialService,
    private formBuilder: FormBuilder
  ) {

    this.tutorialNome = this.formBuilder.control(null, Validators.required);

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

  public addTutorial(): void {
    if (this.tutorialNome.valid) {
      this.tutorial.nome = this.tutorialNome.value;

      this.tutorialService.post(this.tutorial)
        .subscribe((tutorial) => this.tutorial = tutorial);
    }
  }

  public addTitulo(): void {
    //
  }

}
