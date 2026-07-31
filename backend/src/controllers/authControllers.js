import { error } from "node:console";
import { prisma } from "../config/db.js";
import bcrypt from "bcryptjs";
import {generateToken} from "../utils/generateToken.js"

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

    // generate jwt token
    const token = generateToken(user.id)

    res.status(201).json({
      status: "success",
      data: {
        user: {
          id: user.id,
          name: name,
          email: email,
        },
        token,
      },
    });
  } catch (error) {
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if user email exists in the table
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      return res
        .status(400)
        .json({ error: "invalid email or password" });
    }

    // check if user password
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(400).json({error: "invalid email or password"})
    }

    // generate jwt token
    const token = generateToken(user.id)

    res.status(201).json({
      status: "success",
      data: {
        user: {
          id: user.id,
          email: email,
        },
        token,
      },
    });

  } catch (error) {

    return res.status(500).json({
      error: "Internal server error",
    });
  }
}

export { registration, login };
