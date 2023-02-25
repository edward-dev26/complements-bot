import TelegramBot from 'node-telegram-bot-api';
import config from '../../config';
import { IController, IControllerContext, IProvider } from '../../interfaces/core.interface';

export class TelegramProvider implements IProvider {
  private static instance: TelegramProvider;
  private telegramApi: TelegramBot;

  private constructor() {
    this.telegramApi = new TelegramBot(config.TELEGRAM_TOKEN, { polling: true });
  }

  public static getInstance() {
    if (!this.instance) {
      return new TelegramProvider();
    }

    return TelegramProvider.instance;
  }

  public async sendMessage(chatId: number, message: string) {
    await this.telegramApi.sendMessage(chatId, message);
  }

  public onText(regExp: RegExp, controller: IController) {
    this.telegramApi.onText(regExp, (msg) => {
      const context = this.getControllerContext(msg);

      controller.execute(context, this);
    });
  }

  private getControllerContext(msg: TelegramBot.Message): IControllerContext {
    return {
      chatId: msg.chat.id,
    };
  }
}
