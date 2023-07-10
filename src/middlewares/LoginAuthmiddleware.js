import jwt from "jsonwebtoken";
import { jwtSecretKey } from "../config/index.js";

export const LoginAuthMiddleware = (req, res, next) => {
  try {
    let token = req.headers["x-access-token"];

    if (!token) return res.send(403, { message: "unauthenticate" });

    let isVerified = jwt.verify(token, jwtSecretKey);

    if (!isVerified) return res.send(401, { message: "invalid token" });

    next();
  } catch (error) {
    return res.send(401, error);
  }
};
