// adding new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the room

class Chatroom {
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;
    }

    async addChat(message){
        // format a chat object
        const now = new Date();
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        }

        const response = await this.chats.add(chat);
        return response;
    }

    getChats(callback){
        this.unsub = this.chats
            .where('room', '==', this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type === 'added'){
                    // update the ui
                    callback(change.doc.data());
                }
            });
        });
    }

    updatename(username){
        this.username = username;
        localStorage.setItem('username', username);
    }

    updateRoom(room){
        this.room = room;
        if(this.unsub){
            this.unsub();
        }
        console.log('room updated');
    }
}

// setTimeout(()=> {
//     chatroom.updateRoom('general');
//     chatroom.getChats((data)=>{
//         console.log(data);
//     })
//     chatroom.addChat('hello');
// }, 3000);
// chatroom.updateRoom('gaming');

// chatroom.addChat('hello there!')
// .then(()=> console.log('chat added'))
// .catch(err => console.log(err))