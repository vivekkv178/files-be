const jwtDecode = require("jwt-decode");

function decodeJWT(req, res, next) {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "Authorization token is missing" });
    }

    const decodedToken = jwtDecode.jwtDecode(token);

    const currentTime = Math.floor(Date.now() / 1000);
    if (decodedToken.exp < currentTime) {
      return res
        .status(401)
        .json({ message: "Authorization token has expired" });
    }

    req.user = {
      uid: decodedToken.user_id || decodedToken.sub,
      email: decodedToken.email,
      roles: decodedToken.roles || [],
    };

    next();
  } catch (error) {
    console.error("JWT decoding error:", error);
    res.status(401).json({ message: "Invalid authorization token" });
  }
}

module.exports = decodeJWT;
