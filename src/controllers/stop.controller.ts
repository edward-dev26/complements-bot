import { IController, IControllerContext, IProvider } from '../interfaces/core.interface';
import { IScheduler } from '../interfaces/scheduler';

export class StopController implements IController {
  constructor(private scheduler: IScheduler) {
  }

  execute(context: IControllerContext, provider: IProvider) {
    this.scheduler.deleteJob();

    const message = 'Любимая, Инночка, твои комплименты временно приостановлены. Чтобы возобновить комплименты выполни /start команду';

    provider.sendMessage(context.chatId, message);
  }
}
