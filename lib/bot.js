"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const botbuilder_1 = require("botbuilder");
class Bot extends botbuilder_1.ActivityHandler {
    constructor() {
        super();
        this.onMessage((context, next) => __awaiter(this, void 0, void 0, function* () {
            const text = context.activity.text;
            if (text === '1234') {
                throw new Error('lansando un error');
            }
            yield context.sendActivity(`Dijiste: ${text} :)`);
            yield next();
        }));
        this.onMembersAdded((context, next) => __awaiter(this, void 0, void 0, function* () {
            const users = context.activity.membersAdded;
            for (const user of users) {
                if (user.id !== context.activity.recipient.id) {
                    yield context.sendActivity(`Que onda!!!!`);
                }
            }
            yield next();
        }));
    }
}
exports.Bot = Bot;
//# sourceMappingURL=bot.js.map