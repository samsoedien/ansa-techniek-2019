import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD63MazsIj69utqzZ3xVXXMfAl70LRLAJs',
  authDomain: 'ansa-techniek.firebaseapp.com',
  databaseURL: 'https://ansa-techniek.firebaseio.com',
  projectId: 'ansa-techniek',
  storageBucket: 'ansa-techniek.appspot.com',
  messagingSenderId: '538660322751',
  appId: '1:538660322751:web:99eb1ed8f561dae2',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
