import { ComplementsBot } from './bot';
import { TelegramProvider } from './providers/telegram/telegram.provider';

const provider = TelegramProvider.getInstance();
const bot = new ComplementsBot(provider);

bot.run();
