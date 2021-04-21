//render chat templates to the dom
//clear the lsit of chats when the room changes

class chatUI {
    constructor(list){
        this.list = list;
    }
    render(data){
        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            {addSuffix: true})
        const html = `
            <li class="list-group-item">
                <span class="username">${data.username}</span>
                <span class="message">${data.message}</span>
                <div class="time">${when}</div>
            </li>
        `;

        this.list.innerHTML +=html;
    }
    clear(){
        this.list.innerHTML='';
    }
}