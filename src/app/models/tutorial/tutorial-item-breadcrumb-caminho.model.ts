import { Tutorial } from "./tutorial.model";

export class TutorialItemBreadcrumbCaminho {
  constructor(
    public id?: number,
    public tutorial?: Tutorial,
    public ordem?: number,
    public caminho?: String
  ) { }
}
