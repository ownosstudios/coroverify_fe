import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyARFfH3TENRjUjdyvK3Cna53cf0y4ju0Hw",
    authDomain: "somerandomtest-a663c.firebaseapp.com",
    databaseURL: "https://somerandomtest-a663c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "somerandomtest-a663c",
    storageBucket: "somerandomtest-a663c.appspot.com",
    messagingSenderId: "231922182083",
    appId: "1:231922182083:web:41dfab7e7fe182c2ea3f76"
}

if (firebase) {
    firebase.initializeApp(config)
}

export default firebase