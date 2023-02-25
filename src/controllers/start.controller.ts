import { IController, IControllerContext, IProvider } from '../interfaces/core.interface';
import { IScheduler } from '../interfaces/scheduler';
import { IComplementsRepository } from '../interfaces/complements.repository';
import { ComplementView } from '../views/complement.view';

export class StartController implements IController {
  constructor(private scheduler: IScheduler, private repository: IComplementsRepository) {
  }

  execute(context: IControllerContext, provider: IProvider) {
    if (!this.scheduler.isScheduled) {
      this.scheduler.schedule(() => {
        const complement = this.repository.getRandom();

        provider.sendMessage(context.chatId, ComplementView.getView(complement));
      });
    }

    const message = `Любимая, Инночка, ты будушь получать комплементы каждый день в 10 утра. Но ты можешь не ждать этого времени и получуть комплимент прямо сейчас выполнив /complement команду.
     
Если у тебя будут какие то вопросы то выполни /help команду.
`;

    provider.sendMessage(context.chatId, message);
  }
}
