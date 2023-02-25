import { IProvider } from './interfaces/core.interface';
import { StartController } from './controllers/start.controller';
import { ComplementController } from './controllers/complement.controller';
import { StopController } from './controllers/stop.controller';
import { ComplementsRepository } from './repositories/complements.repository';
import { IScheduler } from './interfaces/scheduler';
import { ComplementsScheduler } from './scheduler/complements.scheduler';
import { IComplementsRepository } from './interfaces/complements.repository';
import { HelpController } from './controllers/help.controller';

export class ComplementsBot {
  private readonly complementsScheduler: IScheduler;
  private readonly complementsRepository: IComplementsRepository;

  constructor(private provider: IProvider) {
    this.complementsScheduler = new ComplementsScheduler();
    this.complementsRepository = new ComplementsRepository();
  }

  run() {
    this.onStart();
    this.onComplement();
    this.onStop();
    this.onHelp();
  }

  private onStart() {
    const controller = new StartController(this.complementsScheduler, this.complementsRepository);

    this.provider.onText(/\/start/, controller);
  }

  private onComplement() {
    const controller = new ComplementController(this.complementsRepository);

    this.provider.onText(/\/complement/, controller);
  }

  private onStop() {
    const controller = new StopController(this.complementsScheduler);

    this.provider.onText(/\/stop/, controller);
  }

  private onHelp() {
    const controller = new HelpController();

    this.provider.onText(/\/help/, controller);
  }
}
