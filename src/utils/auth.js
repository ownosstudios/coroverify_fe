import firebase from './firebase'
import axios from './axiosurl'

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
.then(() => {
    return true
})
.catch((err) => {
    console.log(err)
})

const checkUser = (ifUser, ifNot) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // console.log(user)
            ifUser()
        } else {
            ifNot()
        }
    })
}

const applyClaims = (token, claims, next) => {
    axios.post('/auth/register', {token: token, claims: claims})
    .then((res) => {
        if (res.status === 200) {
            currentUser().getIdToken(true)
            .then((token) => {
                console.log(token)
                next()
            })
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

const signUpEmail = (email, password, userType, event) => {
    event.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(({user}) => {
        if (user) {
            console.log(user.getIdToken().then((token) => {return token}))
            applyClaims(user.uid, userType, user.sendEmailVerification)
        }
    })
}

const logOutUser = () => {
    firebase.auth().signOut()
    .then(() => {
        axios.get('/auth/logout')
        .then((res) => {
            if (res.status === 200) {
                console.log('User signed out')
            }
        })
        .catch((err) => {
            console.log(err)
        })
    })
    .catch((err) => {
        console.log(err)
    })
}

const currentUser = () => {
    const currentUser = firebase.auth().currentUser
    return currentUser
}


const signIn = (email, password, event, claims) => {
    event.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(({user}) => {
        console.log(user)
        console.log('token : ', user.getIdToken())
        applyClaims(user.uid, claims)
        // next()
    })
    .catch((err) => {
        console.log(err)
    })
}

const setClaims = (claims) => {
}

export {signUpEmail, logOutUser, currentUser, signIn, setClaims, checkUser}