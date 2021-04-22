var firebaseConfig = {
    apiKey: "AIzaSyB9wcLSdOJ4eTPc3t_SwrEbARVahKilL58",
    authDomain: "cruddemo-df601.firebaseapp.com",
    projectId: "cruddemo-df601",
    storageBucket: "cruddemo-df601.appspot.com",
    messagingSenderId: "841633805723",
    appId: "1:841633805723:web:a64ee49c73a1d5947a9d3e",
    measurementId: "G-S1GET7T2P6"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const DB = firebase.firestore();
const COLLECTION = 'students';
const LISTVIEW = document.querySelector('#studentdisplay');

DB.collection(COLLECTION).onSnapshot(snapshot => {
    const collectionArr = snapshot.docs;
    if(collectionArr.length > 0){
        LISTVIEW.innerHTML = '';
        collectionArr.forEach(arrelement => {
            element = arrelement.data();
            LISTVIEW.innerHTML += `
                <h3> ${element.fornavn} ${element.etternavn} </h3>
            `
        });

    } else {
        renderEmptydbView();
    }
});

function renderEmptydbView(){
    LISTVIEW.innerHTML = `
        <p> Move along, there is nothing to see here, the base was robbed! </p>
    `
}