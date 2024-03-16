// Import Firebase modules
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyBnjQ6Iz9_UKec8wgF9RgD_4hJ-Q3YzpMw",
    authDomain: "clinic-connect-7b4d7.firebaseapp.com",
    projectId: "clinic-connect-7b4d7",
    storageBucket: "clinic-connect-7b4d7.appspot.com",
    messagingSenderId: "744565852554",
    appId: "1:744565852554:web:12c4a6253cb4d6d0732073"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Reference to a Firestore collection
const collectionRef = collection(db, 'Clinics');

// Get data from Firestore
getDocs(collectionRef)
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is an object representing the document
      console.log(doc.id, ' => ', doc.data());
    });
  })
  .catch((error) => {
    console.error("Error getting documents: ", error);
  });
