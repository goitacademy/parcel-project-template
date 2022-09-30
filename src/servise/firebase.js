import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, set, ref, onValue, remove } from 'firebase/database';

import { firebaseConfig } from '../config/firebase-config';
import { userIn } from '../js/authorization-button';
import { parseFavCoctails } from '../js/fav-coctails';

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase();

export const signUp = () => {
  signInWithPopup(auth, provider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

export const quitAcc = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch(error => {
      // An error happened.
    });
};

onAuthStateChanged(auth, user => {
  userIn('enable');
  if (!user) {
    userIn('disable');
  }
});

export function writeUserCoctaile(userId, data = {}) {
  set(ref(database, 'coctailes/' + userId), data);
}
export function removeUserCoctaile(userId, data = {}) {
  remove(ref(database, 'coctailes/' + userId), data);
}

export function writeUseringridients(data = {}) {
  set(ref(database, 'ingridients'), data);
}
onValue(ref(database, 'coctailes'), snapshot => {
  const data = snapshot.val();
  if (data) {
    const favoriteCoctailesRawArr = Object.values(data);
    // console.log(favoriteCoctailesRawArr);
    const favoriteCoctailesArr = favoriteCoctailesRawArr.map(
      id => id.cockteileId
    );
    parseFavCoctails(favoriteCoctailesArr);
  }
});
