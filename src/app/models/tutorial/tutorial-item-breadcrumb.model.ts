import { Tutorial } from './tutorial.model';
import { TutorialItemBreadcrumbCaminho } from './tutorial-item-breadcrumb-caminho.model';

export class TutorialItemBreadcrumb {
  constructor(
    public id?: number,
    public tutorial?: Tutorial,
    public ordem?: number,
    public tutorialItemBreadCrumbCaminho?: TutorialItemBreadcrumbCaminho[]
  ) { }
}
