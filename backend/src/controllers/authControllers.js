import { prisma } from "../config/db.js";
import bcrypt from "bcryptjs";

const registration = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user already exists
    const userExist = await prisma.user.findUnique({
      where: { email: email },
    });

    if (userExist) {
      return res
        .status(400)
        .json({ error: "user already exists witch this email" });
    }

    // hash password
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({
      status: "success",
      data: {
        user: {
          id: user.id,
          name: name,
          email: email,
        },
      },
    });
  } catch (error) {
    res.status(401);
  }
};

export { registration };
