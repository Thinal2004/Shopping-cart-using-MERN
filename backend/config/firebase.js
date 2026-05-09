import admin from 'firebase-admin';
import fs from 'fs';

let serviceAccount;

// If we are on Render, read the secret text variable
if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
} else {
    // If we are on your local computer, read the local file
    serviceAccount = JSON.parse(
        fs.readFileSync(new URL('../firebase-service-account.json', import.meta.url))
    );
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

export default admin;