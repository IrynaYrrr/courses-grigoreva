import { Telegram } from 'telegraf';
import config from 'config';

const tg = new Telegram(config.get('telegram.token'));

const sendMessage = async (message) => {
    const chatId = config.get('telegram.channelId');

    let msg = message;
    if (msg.length > 4096) {
        msg = msg.slice(0, 4096);
    }

    const result = await tg.sendMessage(chatId, msg);
    return result;
};

export default { sendMessage };
