const { initializeApp, cert } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");
const { getFirestore } = require("firebase-admin/firestore");

const config = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: process.env.FIREBASE_ADMIN_KEY,
  clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
};

console.log(`Firebase config ${JSON.stringify(config)}`);

const app = initializeApp({
  credential: cert(config),
});

const auth = getAuth(app);
const fireStore = getFirestore(app);

module.exports = { auth, fireStore };
