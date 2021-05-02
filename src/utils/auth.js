import firebase from './firebase'
import axios from './axiosurl'

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
.then(() => {
    // console.log('persistence set')
    return true
})
.catch((err) => {
    console.log(err)
})

const applyClaims = (token, claims) => {
    axios.post('/auth/userClaims', {token: token, claims: claims})
    .then((res) => {
        if (res.status === 200) {
            currentUser().getIdToken(true)
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

const handleAuth = (email, password, userType) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
        if (user) {
            axios.post('/auth/register',
            {token: user.user.uid, claims: {userType: userType}, email: user.user.email},
            {withCredentials: true, credentials: 'include'})
            .then((res) => {
            })
            .catch((err) => {
                console.log(err)
            })
            user.user.sendEmailVerification()
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

const emailLogin = (email) => {
    axios.post('/auth/login', {email: email})
    .then((res) => {
        if (res.status === 200) {
            const token = res.data.token
            console.log(token)
            firebase.auth().signInWithCustomToken()
            .then((result)=> {
                console.log('user?', result)
                // console.log('user?', result)
                // if (!result.user.emailVerified) {
                //     result.user.sendEmailVerification()
                //     console.log('email wasn\'t verified, have sent the email')
                // }
            })
            .catch((err) => {
                console.log(err)
            })
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

const signIn = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
        console.log(user)
    })
    .catch((err) => {
        console.log(err)
    })
}

export {handleAuth, logOutUser, currentUser, emailLogin, signIn}