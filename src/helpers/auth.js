import { ref, firebaseAuth } from '../config/constants'
import {userData} from '../config/data'


export  function setData(name,lastname) {
     userData.name = name
     userData.lastname = lastname
}
export function auth (email, pw ) {
    return firebaseAuth().createUserWithEmailAndPassword(email, pw)
      .then(saveUser)
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
    return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function saveUser (user) {
    console.log(userData.name)
    return ref.child(`users/${user.uid}/info`)
    .set({
        name:userData.name,
        lastName:userData.lastname,
        email: user.email,
        uid: user.uid,
        photoURL:userData.photoURL
    })
    .then(() => user)
}


