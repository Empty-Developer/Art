import jwt from "jsonwebtoken";
import { prisma } from "../config/db.js";

/**
 * @description this function read the token
 * from the request and check if token is valid
 */
export default async (req, res, next) => {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await prisma.user.findUnique({
        where: { id: decoded.id },
      });

      if (!user) {
        return res.status(401).json({ error: "User no longer exists" });
      }

      req.user = user;
      next();
    } catch (error) {
      return res.status(403).json({
        message: "No access!",
      });
    }
  } else {
    return res.status(403).json({
      message: "No access!",
    });
  }
};
