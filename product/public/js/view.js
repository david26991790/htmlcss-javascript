import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js'

import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js'

const firebaseConfig = {
    
        apiKey: "AIzaSyC5FF-W5r7pmNSWcw_IeKNt0Hemft-TRLA",
        authDomain: "corded-key-387507.firebaseapp.com",
        projectId: "corded-key-387507",
        storageBucket: "corded-key-387507.appspot.com",
        messagingSenderId: "474447614658",
        appId: "1:474447614658:web:c427cce3d1c628d931e15b"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "products"));

querySnapshot.forEach(doc => {
    console.log(doc.id)
    let documentData = doc.data()
    console.log(documentData['productName'])
});
