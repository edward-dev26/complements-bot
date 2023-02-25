import { IController, IControllerContext, IProvider } from '../interfaces/core.interface';
import { HelpView } from '../views/help.view';

export class HelpController implements IController {
  execute(context: IControllerContext, provider: IProvider) {
    provider.sendMessage(context.chatId, HelpView.getView());
  }
}
