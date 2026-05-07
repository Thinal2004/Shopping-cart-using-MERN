import admin from '../config/firebase.js';

export const protect = async (req, res, next) => {
    let token;

    // Check if the request has an "Authorization: Bearer <token>" header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Grab just the token string
            token = req.headers.authorization.split(' ')[1];

            // Ask Google to verify it
            const decodedToken = await admin.auth().verifyIdToken(token);

            // Attach the user's secure Firebase UID to the request
            req.user = {
                uid: decodedToken.uid,
                email: decodedToken.email,
                name: decodedToken.name,
            };

            // Let them pass!
            next();
        } catch (error) {
            console.error(error);
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};