export * from './private-project-controller.service';
import { PrivateProjectControllerService } from './private-project-controller.service';
export * from './public-project-controller.service';
import { PublicProjectControllerService } from './public-project-controller.service';
export const APIS = [PrivateProjectControllerService, PublicProjectControllerService];
