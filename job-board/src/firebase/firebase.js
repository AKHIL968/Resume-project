
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';

// const firebaseConfig = {
//   apiKey: "AIzaSyBX2fIeS61Wb3mBOs1tc3n8c6juqcFE4_0",
//   authDomain: "job-board-46977.firebaseapp.com",
//   projectId: "job-board-46977",
//   storageBucket: "job-board-46977.appspot.com",
//   messagingSenderId: "756269029424",
//   appId: "1:756269029424:web:2d4b748ffb485a9521b5f5",
//   measurementId: "G-6LP074WG43"
// };

// // Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app(); // if already initialized, use that one
// }

// const auth = firebase.auth();
// const database = firebase.database();

// export { firebase, auth, database };

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBX2fIeS61Wb3mBOs1tc3n8c6juqcFE4_0",
  authDomain: "job-board-46977.firebaseapp.com",
  projectId: "job-board-46977",
  storageBucket: "job-board-46977.appspot.com",
  messagingSenderId: "756269029424",
  appId: "1:756269029424:web:2d4b748ffb485a9521b5f5",
  measurementId: "G-6LP074WG43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const storage = getStorage()

export { auth, database, storage };





