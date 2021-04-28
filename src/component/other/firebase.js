import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA4OvcN-fF8bdCEbt1RYPY_rdChhCSaKHo",
  authDomain: "whatsapp-clone-ad5f5.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-ad5f5.firebaseio.com",
  projectId: "whatsapp-clone-ad5f5",
  storageBucket: "whatsapp-clone-ad5f5.appspot.com",
  messagingSenderId: "673151250137",
  appId: "1:673151250137:web:963dd1e51f2640c25818c8",
  measurementId: "G-6LVYFDEY10"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;