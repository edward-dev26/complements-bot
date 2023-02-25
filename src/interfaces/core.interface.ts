export interface IProvider {
  sendMessage(chatId: number, message: string): void;

  onText(regExp: RegExp, controller: IController): void;
}

export interface IControllerContext {
  chatId: number;
}

export interface IController {
  execute(context: IControllerContext, provider: IProvider): void;
}
