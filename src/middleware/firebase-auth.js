const { auth } = require("../config/firebase-config.js");

const authenticateFirebaseAuthToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }
  const idToken = authHeader.split("Bearer ")[1];
  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    if (error.errorInfo.code === "auth/id-token-expired") {
      return res.status(401).json({ mseeage: "Token expired" });
    }
    console.error("Error verifying token:", error);
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

module.exports = { authenticateFirebaseAuthToken };
