var firebaseConfig = {
apiKey: "AIzaSyC37S2hC3aAkadIPClMJGvnzKWZF4huhOo",
authDomain: "cz-jornal.firebaseapp.com",
databaseURL: "https://cz-jornal-default-rtdb.firebaseio.com",
projectId: "cz-jornal",
storageBucket: "cz-jornal.appspot.com",
messagingSenderId: "618904456654",
appId: "1:618904456654:web:eba3abbd25623d8d57af9f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true});
