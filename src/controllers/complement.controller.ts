import { IController, IControllerContext, IProvider } from '../interfaces/core.interface';
import { IComplementsRepository } from '../interfaces/complements.repository';
import { ComplementView } from '../views/complement.view';

export class ComplementController implements IController {
  constructor(private repository: IComplementsRepository) {
  }

  execute(context: IControllerContext, provider: IProvider) {
    const complement = this.repository.getRandom();

    provider.sendMessage(context.chatId, ComplementView.getView(complement));
  }
}
