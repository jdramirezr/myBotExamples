import { ActivityHandler, TurnContext} from 'botbuilder';

export class Bot extends ActivityHandler {

    constructor() {
        super();

        this.onMessage(async (context: TurnContext, next) => {
            const text = context.activity.text
            if (text === '1234'){
                throw new Error('lansando un error');
            }
            await context.sendActivity(`Dijiste: ${text} :)`);
            await next();
        });

        this.onMembersAdded(async (context: TurnContext, next)=> {
            const users = context.activity.membersAdded
            for (const user of users){
                if (user.id !== context.activity.recipient.id ){
                    await context.sendActivity(`Que onda!!!!`)
                }
            }
            await next();
        })
    }
}
