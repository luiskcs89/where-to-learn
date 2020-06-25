import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyATT6fw6pHW-GciWib8voZCK0v8jGTYyyI",
    authDomain: "where-to-learn-452ed.firebaseapp.com",
    databaseURL: "https://where-to-learn-452ed.firebaseio.com",
    projectId: "where-to-learn-452ed",
    storageBucket: "where-to-learn-452ed.appspot.com",
    messagingSenderId: "54885991990",
    appId: "1:54885991990:web:393fdbd8edaf2379c47a97",
    measurementId: "G-XJ5WP5KJSF"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();

export function getCurrentUser() {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
            if(user) {
                const userData = (await db.collection('usersData').doc(user.uid).get()).data();
                resolve(userData);
            } else {
                resolve(null);
            }
            unsubscribe();
        })
    })
}

export async function login(email: string, password: string) {
    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email, password);
        const user = (await db.collection('usersData').doc(res.user?.uid).get()).data();
        return user;
    } catch(e) {
        return e;
    }
}

export async function register(name: string, email: string, password: string) {
    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const user = {
            uid: res.user?.uid,
            name,
            email,
            created: new Date()
        }
        await db.collection('usersData').doc(res.user?.uid).set(user);
        return user;
    } catch(e) {
        return e;
    }
}

export function logout() {
    firebase.auth().signOut();
}