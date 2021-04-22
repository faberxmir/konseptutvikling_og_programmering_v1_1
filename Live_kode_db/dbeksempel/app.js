// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const CHATS = 'frontpagechats';
const DB = firebase.firestore();
const UL = document.querySelector('UL');
console.log(UL);

DB.collection(CHATS).get().then(snapshot => {
    snapshot.docs.forEach(element => {
        console.log(element);
        UL.innerHTML += `
            <li class="dbelement">
                <h1> ${element.data().title}</h1>
                <p> ${element.data().content}</p>    
            </li>
        `
    });
});