const collectionUsers = 'users';

const form = document.querySelector("form");
const db = firebase.firestore();
const ul = document.querySelector('ul');

// db.collection(collectionUsers).get().then((snapshot) => {
//     console.log(snapshot);
//     let html;
//     ul.innerHTML = "";
//     snapshot.docs.forEach(element => {
//         ul.innerHTML += `<li data-id=${element.id}> ${element.data().name} | ${element.data().password}</li>`;
//     });
// });

db.collection(collectionUsers).onSnapshot((snapshot)=>{
    let html;
    ul.innerHTML = "";
    snapshot.docs.forEach(element => {
        html = `<li data-id=${element.id}> ${element.data().name}</li>`;
        ul.innerHTML += html;
    });
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    db.collection(collectionUsers).doc().set(
        {
            name: document.getElementById('name').value,
            password: document.getElementById('password').value
        }
    );
    form.reset();
});

document.addEventListener('click', (event) => {
    const target = event.target;
    if(target.tagName == 'LI'){
        console.log(target.dataset.id);
        db.collection(collectionUsers).doc(target.dataset.id).delete().catch((error => {
            console.log(error);
        }));
    }
});