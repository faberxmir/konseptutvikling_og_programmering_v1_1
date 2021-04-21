//dom queries
const chatlist = document.querySelector('.chat-list');
const chatform = document.querySelector('.new-chat');
const nameform = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');

const username = localStorage.username ? localStorage.username: 'anon';

//class instances
const chatui = new chatUI(chatlist);
const chatroom = new Chatroom('general', username);

//get chats and render
chatroom.getChats(data => {
    chatui.render(data);
});

chatform.addEventListener('submit', e => {
    e.preventDefault();
    const message = chatform.message.value.trim();
    chatroom.addChat(message)
        .then(()=>{
            chatform.reset();
        }).catch(err => {
            console.log(err);
        });
});

nameform.addEventListener('submit', e => {
    e.preventDefault();
    const newName = nameform.name.value.trim();
    chatroom.updatename(newName);
    nameform.reset();
    updateMssg.innerText = `Your name was updated to ${newName}`;
    setTimeout(() => {updateMssg.innerText =""}, 3000);
});

rooms.addEventListener('click', event => {

    if(event.target.tagName === 'BUTTON'){
        chatui.clear();
        const newChatroom = event.target.getAttribute('id');
        console.log(newChatroom);
        chatroom.updateRoom(event.target.getAttribute('id'));
        chatroom.getChats(chat => {
            chatui.render(chat);
        });
    }
});