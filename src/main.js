import Vue from 'vue'
import App from './App.vue'

import {firestorePlugin} from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

import router from './routes/index'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDHp3HLJwaVOe5vJqf9e5DtkyTxdDZMtv4",
  authDomain: "meme-factory-e1a58.firebaseapp.com",
  projectId: "meme-factory-e1a58",
  storageBucket: "meme-factory-e1a58.appspot.com",
  messagingSenderId: "327378836665",
  appId: "1:327378836665:web:3d2514976b4a5ad7708f68",
  measurementId: "G-KKERVPCFQP"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//const firebaseAnalytic = firebase.analytics();

export const firestore = firebaseApp.firestore()
export const storage = firebase.storage().ref('/images')

Vue.use(firestorePlugin)

new Vue({
  vuetify,
  router,
  render: h => h(App),
  components: {App}
}).$mount('#app')
