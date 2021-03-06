import { BotFrameworkAdapter, TurnContext } from 'botbuilder';
import * as restify from 'restify';
import { Bot } from './bot';

// Create HTTP server.
const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 4000, () => {
    console.log(`\n${server.name} listening to ${server.url}`);
    console.log('\nGet Bot Framework Emulator: https://aka.ms/botframework-emulator');
    console.log('\nTo talk to your bot, open the emulator select "Open Bot"');
});

// Create adapter.
// See https://aka.ms/about-bot-adapter to learn more about adapters.
const adapter = new BotFrameworkAdapter({
    appId: '',
    appPassword: ''
});

const bot = new Bot();

adapter.onTurnError = async (context, error) => {
    console.log(error);
    await context.sendActivity('Ups, halgo salio mal :(')
};

// Listen for incoming requests.
server.post('/api/messages', (req, res) => {
    adapter.processActivity( req, res, async(context:TurnContext) => {
        await bot.run(context);
    });

});