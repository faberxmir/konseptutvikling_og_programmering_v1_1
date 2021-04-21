var firebaseConfig = {
    apiKey: "AIzaSyAZzYQMwmx0gqSfTK6H_yGCYDIZAJCYDn8",
    authDomain: "dbchat-5790c.firebaseapp.com",
    projectId: "dbchat-5790c",
    storageBucket: "dbchat-5790c.appspot.com",
    messagingSenderId: "791534784152",
    appId: "1:791534784152:web:96ecc276da5c3ece92caed",
    measurementId: "G-JEV6524X08"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const CHATCOLLECTION = 'frontpagechats';
const CHATBOX = document.querySelector('#chatbox');
const DB = firebase.firestore();



//listeners
DB.collection(CHATCOLLECTION).onSnapshot(snapshot => {
    populateChat(snapshot);
});

CHATBOX.addEventListener('keyup', event => {
    
    switch(event.key){
        case 'Enter':
            insertTextToDB(CHATCOLLECTION, CHATBOX.value);
            break;
        case 'Delete':
            //clear text
            CHATBOX.value = '';
            break;
        default:
            break;
    }
});

function insertTextToDB(collection, content){
    
    DB.collection(collection).doc().set(
        {
            title: "From Q",
            created_at: firebase.firestore.Timestamp.fromDate(new Date()),
            content: content
        }
    );
    CHATBOX.value = '';
}

function populateChat(snapshot){ 
        let array = snapshot.docs;
        const CHATLIST = document.querySelector('#chatlist');
        CHATLIST.innerHTML = '';
        array.forEach(chatobject => {
            CHATLIST.innerHTML += formatListElement(chatobject.data());
        });
}

function formatListElement(chatobject){
    return `
        <li>
            <h1>${chatobject.title}</h1>
            <h3>${dateFns.distanceInWordsToNow(chatobject.created_at.toDate())} ago</h3>
            <p>${chatobject.content}</p>
        </li>
    `;
}