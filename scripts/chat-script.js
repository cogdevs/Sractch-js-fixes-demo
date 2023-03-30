import chat from '../chat.json';
async function Chat() {
    
    var i = 0;
    while (chat[Message1].length > i) {
        chat[Message1][i].Actor.say(chat[Message1][i].msg)
        i++;
    }
}
Chat();