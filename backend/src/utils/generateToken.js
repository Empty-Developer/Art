import jwt from "jsonwebtoken";

/**
 * @description this function generated random token
 * for user/s and state dead line token
 * @param {String} userId 
 * @returns 
 */
export const generateToken = (userId) => {
  const payload = { id: userId };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "5d",
  });

  return token
};
