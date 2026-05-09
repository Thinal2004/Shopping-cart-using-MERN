import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';

let serviceAccount;

if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
} else {
    const filePath = path.join(process.cwd(), 'firebase-service-account.json');
    serviceAccount = JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

export default admin;