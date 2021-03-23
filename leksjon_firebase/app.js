 
   let ul = document.querySelector('ul');
 
 // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        var firebaseConfig = {
            apiKey: "AIzaSyDm2PfOoR-AWVrCaxl2Wj0vzqvYJykL4b0",
            authDomain: "leksjonfetch.firebaseapp.com",
            projectId: "leksjonfetch",
            storageBucket: "leksjonfetch.appspot.com",
            messagingSenderId: "781218202598",
            appId: "1:781218202598:web:da058debcee5ef33640c27",
            measurementId: "G-S4JDNTRRE5"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
          //firebase.analytics();
          const db =firebase.firestore();
          //console.log(db);

let collection = db.collection('users').get().then((snapshot)=>{
    const data = snapshot.docs;
    if(data.length > 0){
        data.forEach(element => {
            const html = 
            `
                <li data-id="${element.id}">
                    <span>${element.data().navn}</span>
                    <span>${element.data().email}</span>
                    <button> Delete </button>
                </li>
            `
            ul.innerHTML += html;
        });
    }
})

const form = document.querySelector('form');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const now = new Date();
    const user = {
        navn: form.navn.value,
        email: form.email.value,
        registered: firebase.firestore.Timestamp.fromDate(now)
    }
    console.log(user);
    db.collection('users').add(user).then(data => {
        console.log("user added");
    }).catch(error => {
        console.log(error);
    });
});

ul.addEventListener('click', e => {
    if(e.target.tagName ==="BUTTON"){
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('users').doc(id).delete().then(()=>{
            console.log(`Recipe ${id} deleted!`);
        });
    }
});

db.collection('users').onSnapshot(snapshot => {
    console.log(snapshot.docChanges());
});