import jwt from "jsonwebtoken";
import { resolve } from "node:path";

/**
 * @description this function generated random token
 * for user/s and state dead line token
 * @param {String} userId
 * @param {[]} res
 * @returns
 */
export const generateToken = (userId, res) => {
  const payload = { id: userId };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "5d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: (1000 * 60 * 60 * 24) * 7,
  });

  return token;
};
