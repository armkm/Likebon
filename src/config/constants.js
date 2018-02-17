import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCnYAcIHv2H5l3ebTyQjCcrEOW0nBC3IIo",
    authDomain: "likebon-43e2d.firebaseapp.com",
    databaseURL: "https://likebon-43e2d.firebaseio.com",
    projectId: "likebon-43e2d",
    storageBucket: "likebon-43e2d.appspot.com",
    messagingSenderId: "616707020729"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

