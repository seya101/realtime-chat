import firebase from 'firebase'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "realtime-chat-9f53c.firebaseapp.com",
  projectId: "realtime-chat-9f53c",
  storageBucket: "realtime-chat-9f53c.appspot.com",
  messagingSenderId: "925562610107",
  appId: "1:925562610107:web:ca577fa3954e520145649e"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }