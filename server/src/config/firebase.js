const admin = require('firebase-admin');
const fs = require('fs');

// Automatically check if the app is live on Render or running locally
const renderSecretPath = '/etc/secrets/firebase-service-account.json';
const localSecretPath = './firebase-service-account.json'; // or '../firebase-service-account.json' depending on your exact folder structure

// Use the Render vault if it exists, otherwise use your local file
const serviceAccountPath = fs.existsSync(renderSecretPath) 
  ? renderSecretPath 
  : localSecretPath;

const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;