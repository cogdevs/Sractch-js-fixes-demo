import chat from 'https://cogdevs.github.io/Sractch-js-fixes-demo/chat.json';
function Chat() {
    var i = 0;
    while (chat[Message1].length > i) {
        chat[Message1][i].Actor.say(chat[Message1][i].msg)
        i++;
    }
}
Chat();