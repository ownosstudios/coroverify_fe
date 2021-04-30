import firebase from './firebase'
import axios from './axiosurl'

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
.then(() => {
    console.log('persistence set')
})
.catch((err) => {
    console.log(err)
})

const handleAuth = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
        if (user) {
            axios.post('/auth', {token: user.user.uid, claims: {helperType: 'distributor'}, email: user.user.email}, {withCredentials: true, credentials: 'include'})
            .then((res) => {
                // console.log(res.data.token)
                // getAuth(res.token)
                user.user.sendEmailVerification()
                window.localStorage.setItem('token', res.data.token)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    })
}

const logOutUser = () => {
    firebase.auth().signOut()
    .then(() => {
        console.log('User signed out')
    })
    .catch((err) => {
        console.log(err)
    })
}

const getAuth = () => {
    // const token = window.localStorage.getItem('token')
    // firebase.auth().signInWithCustomToken(token)
    // .then((user)=> {
    //     console.log('user?', user)
    //     if (!user.user.emailVerified) {
    //         user.user.sendEmailVerification()
    //         console.log('email wasn\'t verified, have sent the email')
    //     }
    // })
    // .catch((err) => {
    //     console.log(err)
    // })
    // firebase.auth().onAuthStateChanged((user) => {
    //     console.log(user)
    // })
    const currentUser = firebase.auth().currentUser
    console.log('firebase user: ', currentUser)
    axios.get('/auth')
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
}

export {handleAuth, logOutUser, getAuth}